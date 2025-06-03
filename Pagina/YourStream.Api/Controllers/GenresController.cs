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
    [Authorize]
    public class GenresController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public GenresController(ApplicationDbContext db) => _db = db;

        // GET: api/Genres
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<GenreDto>>> GetAll()
        {
            var genres = await _db.Genres
                .Include(g => g.MovieGenres)
                    .ThenInclude(mg => mg.Movie)
                .Include(g => g.SeriesGenres)
                    .ThenInclude(sg => sg.Series)
                .ToListAsync();

            var dtos = genres.Select(g => new GenreDto
            {
                Id = g.Id,
                Name = g.Name,
                MovieTitles = g.MovieGenres!
                                  .Select(mg => mg.Movie!.Title)
                                  .ToList(),
                SeriesTitles = g.SeriesGenres!
                                  .Select(sg => sg.Series!.Title)
                                  .ToList()
            }).ToList();

            return Ok(dtos);
        }

        // GET: api/Genres/{id}
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<GenreDto>> GetById(int id)
        {
            var genre = await _db.Genres
                .Include(g => g.MovieGenres)
                    .ThenInclude(mg => mg.Movie)
                .Include(g => g.SeriesGenres)
                    .ThenInclude(sg => sg.Series)
                .SingleOrDefaultAsync(g => g.Id == id);

            if (genre == null) return NotFound();

            var dto = new GenreDto
            {
                Id = genre.Id,
                Name = genre.Name,
                MovieTitles = genre.MovieGenres!
                                  .Select(mg => mg.Movie!.Title)
                                  .ToList(),
                SeriesTitles = genre.SeriesGenres!
                                  .Select(sg => sg.Series!.Title)
                                  .ToList()
            };
            return Ok(dto);
        }

        // POST: api/Genres
        [HttpPost]
        public async Task<ActionResult<GenreDto>> Create([FromBody] Genre genre)
        {
            _db.Genres.Add(genre);
            await _db.SaveChangesAsync();

            var created = await _db.Genres.FindAsync(genre.Id);
            if (created == null) return NotFound();

            var dto = new GenreDto
            {
                Id = created.Id,
                Name = created.Name,
                MovieTitles = new(),
                SeriesTitles = new()
            };
            return CreatedAtAction(nameof(GetById), new { id = dto.Id }, dto);
        }

        // PUT: api/Genres/{id}
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
                if (!await _db.Genres.AnyAsync(g => g.Id == id))
                    return NotFound();
                else
                    throw;
            }
            return NoContent();
        }

        // DELETE: api/Genres/{id}
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


