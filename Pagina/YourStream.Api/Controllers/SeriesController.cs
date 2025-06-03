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
    public class SeriesController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public SeriesController(ApplicationDbContext db) => _db = db;

        // GET: api/Series
        [HttpGet]
        [AllowAnonymous]  // Permite acceso público sin token
        public async Task<ActionResult<IEnumerable<Series>>> GetAll() =>
            Ok(await _db.Series
                        .Include(s => s.SeriesGenres)
                            .ThenInclude(sg => sg.Genre)
                        .ToListAsync());

        // GET: api/Series/5
        [HttpGet("{id}")]
        [AllowAnonymous]  // Permite acceso público sin token
        public async Task<ActionResult<Series>> GetById(int id)
        {
            var series = await _db.Series
                                  .Include(s => s.SeriesGenres)
                                      .ThenInclude(sg => sg.Genre)
                                  .SingleOrDefaultAsync(s => s.Id == id);
            return series == null ? NotFound() : Ok(series);
        }

        // POST: api/Series
        [HttpPost]
        public async Task<ActionResult<Series>> Create([FromBody] Series series)
        {
            _db.Series.Add(series);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = series.Id }, series);
        }

        // PUT: api/Series/5
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
                if (!await _db.Series.AnyAsync(s => s.Id == id)) return NotFound();
                else throw;
            }
            return NoContent();
        }

        // DELETE: api/Series/5
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
