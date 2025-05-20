using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using YourStream.Api.Data;
using YourStream.Api.Models;

namespace YourStream.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class GenresController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public GenresController(ApplicationDbContext db) => _db = db;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Genre>>> GetAll() => Ok(await _db.Genres.ToListAsync());

        [HttpGet("{id}")]
        public async Task<ActionResult<Genre>> GetById(int id)
        {
            var genre = await _db.Genres.FindAsync(id);
            return genre == null ? NotFound() : Ok(genre);
        }

        [HttpPost]
        public async Task<ActionResult<Genre>> Create([FromBody] Genre genre)
        {
            _db.Genres.Add(genre);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = genre.Id }, genre);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Genre genre)
        {
            if (id != genre.Id) return BadRequest();
            _db.Entry(genre).State = EntityState.Modified;
            try { await _db.SaveChangesAsync(); }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _db.Genres.AnyAsync(g => g.Id == id)) return NotFound();
                else throw;
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var genre = await _db.Genres.FindAsync(id);
            if (genre == null) return NotFound();
            _db.Genres.Remove(genre);
            await _db.SaveChangesAsync();
            return NoContent();
        }
    }
}
