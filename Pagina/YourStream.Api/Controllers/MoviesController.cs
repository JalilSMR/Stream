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
    public class MoviesController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public MoviesController(ApplicationDbContext db) => _db = db;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie>>> GetAll() =>
            Ok(await _db.Movies.Include(m => m.MovieGenres).ThenInclude(mg => mg.Genre).ToListAsync());

        [HttpGet("{id}")]
        public async Task<ActionResult<Movie>> GetById(int id)
        {
            var movie = await _db.Movies
                .Include(m => m.MovieGenres).ThenInclude(mg => mg.Genre)
                .SingleOrDefaultAsync(m => m.Id == id);
            return movie == null ? NotFound() : Ok(movie);
        }

        [HttpPost]
        public async Task<ActionResult<Movie>> Create([FromBody] Movie movie)
        {
            _db.Movies.Add(movie);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = movie.Id }, movie);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Movie movie)
        {
            if (id != movie.Id) return BadRequest();
            _db.Entry(movie).State = EntityState.Modified;
            try { await _db.SaveChangesAsync(); }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _db.Movies.AnyAsync(m => m.Id == id)) return NotFound();
                else throw;
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var movie = await _db.Movies.FindAsync(id);
            if (movie == null) return NotFound();
            _db.Movies.Remove(movie);
            await _db.SaveChangesAsync();
            return NoContent();
        }
    }
}