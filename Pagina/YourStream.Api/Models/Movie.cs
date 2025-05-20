using System;
using System.Collections.Generic;

namespace YourStream.Api.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string ImagePath { get; set; } = null!;
        public string ShortDescription { get; set; } = null!;
        public string FullDescription { get; set; } = null!;
        public DateTime? ReleaseDate { get; set; }
        public DateTime CreatedAt { get; set; }

        public ICollection<MovieGenre> MovieGenres { get; set; } = new List<MovieGenre>();
        public ICollection<Favorite> Favorites { get; set; } = new List<Favorite>();
    }
}
