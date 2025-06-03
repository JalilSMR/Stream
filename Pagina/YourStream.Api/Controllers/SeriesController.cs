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
    public class SeriesController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public SeriesController(ApplicationDbContext db) => _db = db;

        // GET: api/Series
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<SeriesDto>>> GetAll()
        {
            var seriesList = await _db.Series
                .Include(s => s.SeriesGenres)
                    .ThenInclude(sg => sg.Genre)
                .ToListAsync();

            var dtos = seriesList.Select(s => new SeriesDto
            {
                Id = s.Id,
                Title = s.Title,
                ImagePath = s.ImagePath,
                ShortDescription = s.ShortDescription,
                FullDescription = s.FullDescription,
                Seasons = s.Seasons,
                CreatedAt = s.CreatedAt,
                Genres = s.SeriesGenres!
                              .Select(sg => sg.Genre!.Name)
                              .ToList()
            }).ToList();

            return Ok(dtos);
        }

        // GET: api/Series/{id}
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<SeriesDto>> GetById(int id)
        {
            var series = await _db.Series
                .Include(s => s.SeriesGenres)
                    .ThenInclude(sg => sg.Genre)
                .SingleOrDefaultAsync(s => s.Id == id);

            if (series == null) return NotFound();

            var dto = new SeriesDto
            {
                Id = series.Id,
                Title = series.Title,
                ImagePath = series.ImagePath,
                ShortDescription = series.ShortDescription,
                FullDescription = series.FullDescription,
                Seasons = series.Seasons,
                CreatedAt = series.CreatedAt,
                Genres = series.SeriesGenres!
                              .Select(sg => sg.Genre!.Name)
                              .ToList()
            };
            return Ok(dto);
        }

        // POST: api/Series
        [HttpPost]
        public async Task<ActionResult<SeriesDto>> Create([FromBody] Series series)
        {
            _db.Series.Add(series);
            await _db.SaveChangesAsync();

            var created = await _db.Series
                .Include(s => s.SeriesGenres)
                    .ThenInclude(sg => sg.Genre)
                .SingleOrDefaultAsync(s => s.Id == series.Id);

            var dto = new SeriesDto
            {
                Id = created!.Id,
                Title = created.Title,
                ImagePath = created.ImagePath,
                ShortDescription = created.ShortDescription,
                FullDescription = created.FullDescription,
                Seasons = created.Seasons,
                CreatedAt = created.CreatedAt,
                Genres = created.SeriesGenres!
                                .Select(sg => sg.Genre!.Name)
                                .ToList()
            };

            return CreatedAtAction(nameof(GetById), new { id = dto.Id }, dto);
        }

        // PUT: api/Series/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Series series)
        {
            if (id != series.Id) return BadRequest();
            _db.Entry(series).State = EntityState.Modified;
            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _db.Series.AnyAsync(s => s.Id == id))
                    return NotFound();
                else
                    throw;
            }
            return NoContent();
        }

        // DELETE: api/Series/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var series = await _db.Series.FindAsync(id);
            if (series == null) return NotFound();
            _db.Series.Remove(series);
            await _db.SaveChangesAsync();
            return NoContent();
        }
    }
}

