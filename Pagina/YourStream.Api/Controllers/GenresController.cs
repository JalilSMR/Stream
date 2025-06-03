using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using YourStream.Api.Data;
using YourStream.Api.Models;

namespace YourStream.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]  // Protege por defecto todos los métodos
    public class GenresController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public GenresController(ApplicationDbContext db) => _db = db;

        // GET: api/Genres
        [HttpGet]
        [AllowAnonymous]  // Permite acceso público sin token
        public async Task<ActionResult<IEnumerable<Genre>>> GetAll() =>
            Ok(await _db.Genres.ToListAsync());

        // GET: api/Genres/5
        [HttpGet("{id}")]
        [AllowAnonymous]  // Permite acceso público sin token
        public async Task<ActionResult<Genre>> GetById(int id)
        {
            var genre = await _db.Genres.FindAsync(id);
            return genre == null ? NotFound() : Ok(genre);
        }

        // POST: api/Genres
        [HttpPost]
        public async Task<ActionResult<Genre>> Create([FromBody] Genre genre)
        {
            _db.Genres.Add(genre);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = genre.Id }, genre);
        }

        // PUT: api/Genres/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Genre genre)
        {
            if (id != genre.Id) return BadRequest();
            _db.Entry(genre).State = EntityState.Modified;
            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _db.Genres.AnyAsync(g => g.Id == id)) return NotFound();
                else throw;
            }
            return NoContent();
        }

        // DELETE: api/Genres/5
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

