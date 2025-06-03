using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using YourStream.Api.Data;
using YourStream.Api.DTOs;
using YourStream.Api.Models;

namespace YourStream.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize] // Protege POST/PUT/DELETE
    public class MoviesController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public MoviesController(ApplicationDbContext db) => _db = db;

        // GET: api/Movies
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<MovieDto>>> GetAll()
        {
            var movies = await _db.Movies
                .Include(m => m.MovieGenres)
                    .ThenInclude(mg => mg.Genre)
                .ToListAsync();

            var dtos = movies.Select(m => new MovieDto
            {
                Id = m.Id,
                Title = m.Title,
                ImagePath = m.ImagePath,
                ShortDescription = m.ShortDescription,
                FullDescription = m.FullDescription,
                ReleaseDate = m.ReleaseDate,
                CreatedAt = m.CreatedAt,
                Genres = m.MovieGenres!
                             .Select(mg => mg.Genre!.Name)
                             .ToList()
            }).ToList();

            return Ok(dtos);
        }

        // GET: api/Movies/{id}
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<MovieDto>> GetById(int id)
        {
            var movie = await _db.Movies
                .Include(m => m.MovieGenres)
                    .ThenInclude(mg => mg.Genre)
                .SingleOrDefaultAsync(m => m.Id == id);

            if (movie == null) return NotFound();

            var dto = new MovieDto
            {
                Id = movie.Id,
                Title = movie.Title,
                ImagePath = movie.ImagePath,
                ShortDescription = movie.ShortDescription,
                FullDescription = movie.FullDescription,
                ReleaseDate = movie.ReleaseDate,
                CreatedAt = movie.CreatedAt,
                Genres = movie.MovieGenres!
                              .Select(mg => mg.Genre!.Name)
                              .ToList()
            };
            return Ok(dto);
        }

        // POST: api/Movies
        [HttpPost]
        public async Task<ActionResult<MovieDto>> Create([FromBody] Movie movie)
        {
            _db.Movies.Add(movie);
            await _db.SaveChangesAsync();

            // Tras insertar, puedes devolver el DTO del registro recién creado:
            var created = await _db.Movies
                .Include(m => m.MovieGenres)
                    .ThenInclude(mg => mg.Genre)
                .SingleOrDefaultAsync(m => m.Id == movie.Id);

            var dto = new MovieDto
            {
                Id = created!.Id,
                Title = created.Title,
                ImagePath = created.ImagePath,
                ShortDescription = created.ShortDescription,
                FullDescription = created.FullDescription,
                ReleaseDate = created.ReleaseDate,
                CreatedAt = created.CreatedAt,
                Genres = created.MovieGenres!
                                .Select(mg => mg.Genre!.Name)
                                .ToList()
            };

            return CreatedAtAction(nameof(GetById), new { id = dto.Id }, dto);
        }

        // PUT: api/Movies/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Movie movie)
        {
            if (id != movie.Id) return BadRequest();
            _db.Entry(movie).State = EntityState.Modified;
            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _db.Movies.AnyAsync(m => m.Id == id))
                    return NotFound();
                else
                    throw;
            }
            return NoContent();
        }

        // DELETE: api/Movies/{id}
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

