namespace YourStream.Api.Models
{
    public class Genre
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;

        public ICollection<MovieGenre> MovieGenres { get; set; } = new List<MovieGenre>();
        public ICollection<SeriesGenre> SeriesGenres { get; set; } = new List<SeriesGenre>();
    }
}
