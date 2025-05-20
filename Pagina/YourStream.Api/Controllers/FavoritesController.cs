//Trabajo en progreso para futura entrega

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using YourStream.Api.Data;
using YourStream.Api.Models;

namespace YourStream.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class FavoritesController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public FavoritesController(ApplicationDbContext db) => _db = db;

        // GET api/favorites
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Favorite>>> GetMyFavorites()
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
            var favs = await _db.Favorites
                .Include(f => f.Movie)
                .Include(f => f.Series)
                .Where(f => f.UserId == userId)
                .ToListAsync();
            return Ok(favs);
        }

        // POST api/favorites
        [HttpPost]
        public async Task<ActionResult> AddFavorite([FromBody] AddFavoriteDto dto)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
            var fav = new Favorite
            {
                UserId = userId,
                MovieId = dto.MovieId,
                SeriesId = dto.SeriesId
            };
            _db.Favorites.Add(fav);
            await _db.SaveChangesAsync();
            return NoContent();
        }

        // DELETE api/favorites/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult> RemoveFavorite(int id)
        {
            var fav = await _db.Favorites.FindAsync(id);
            if (fav == null) return NotFound();
            //validar que fav.UserId == current user
            _db.Favorites.Remove(fav);
            await _db.SaveChangesAsync();
            return NoContent();
        }
    }

    public record AddFavoriteDto(int? MovieId, int? SeriesId);
}
