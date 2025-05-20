using System;

namespace YourStream.Api.Models
{
    public class Favorite
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; } = null!;

        public int? MovieId { get; set; }
        public Movie? Movie { get; set; }

        public int? SeriesId { get; set; }
        public Series? Series { get; set; }

        public DateTime AddedAt { get; set; }
    }
}
