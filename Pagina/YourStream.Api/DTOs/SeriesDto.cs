namespace YourStream.Api.DTOs
{
    public class SeriesDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string ImagePath { get; set; } = null!;
        public string ShortDescription { get; set; } = null!;
        public string FullDescription { get; set; } = null!;
        public int Seasons { get; set; }
        public DateTime CreatedAt { get; set; }

        // Lista de nombres de géneros (proviene de SeriesGenres→Genre)
        public List<string> Genres { get; set; } = new();
    }
}