using System;

namespace YourStream.Api.Models
{
    public class RefreshToken
    {
        public string Token { get; set; } = null!;
        public int UserId { get; set; }
        public User User { get; set; } = null!;
        public DateTime ExpiresAt { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
