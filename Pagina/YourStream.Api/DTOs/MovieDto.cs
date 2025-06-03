namespace YourStream.Api.DTOs
{
    public class MovieDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string ImagePath { get; set; } = null!;
        public string ShortDescription { get; set; } = null!;
        public string FullDescription { get; set; } = null!;
        public DateTime? ReleaseDate { get; set; }
        public DateTime CreatedAt { get; set; }

        // Lista de nombres de géneros (proviene de la relación MovieGenres→Genre)
        public List<string> Genres { get; set; } = new();
    }
}