namespace YourStream.Api.DTOs
{
    public class GenreDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;

        // Opcional: si quieres exponer títulos de películas/series que usan este género
        public List<string>? MovieTitles { get; set; }
        public List<string>? SeriesTitles { get; set; }
    }
}