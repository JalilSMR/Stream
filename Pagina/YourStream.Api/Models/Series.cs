using System;
using System.Collections.Generic;

namespace YourStream.Api.Models
{
    public class Series
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string ImagePath { get; set; } = null!;
        public string ShortDescription { get; set; } = null!;
        public string FullDescription { get; set; } = null!;
        public int Seasons { get; set; } = 1;
        public DateTime CreatedAt { get; set; }

        public ICollection<SeriesGenre> SeriesGenres { get; set; } = new List<SeriesGenre>();
        public ICollection<Favorite> Favorites { get; set; } = new List<Favorite>();
    }
}
