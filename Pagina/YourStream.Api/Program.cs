using DotNetEnv;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using YourStream.Api.Data;

Env.Load();                          //Carga variables de .env

var builder = WebApplication.CreateBuilder(args);

//DbContext lee de env via Configuration
var connStr = builder.Configuration.GetConnectionString("DefaultConnection")
              ?? throw new InvalidOperationException("No DefaultConnection");

builder.Services.AddDbContext<ApplicationDbContext>(opts =>
    opts.UseSqlServer(connStr));

//JWT
var jwtSection = builder.Configuration.GetSection("Jwt");
var keyBytes = Encoding.UTF8.GetBytes(jwtSection["Key"]!);

builder.Services
  .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
  .AddJwtBearer(o =>
  {
      o.TokenValidationParameters = new TokenValidationParameters
      {
          ValidateIssuer = true,
          ValidIssuer = jwtSection["Issuer"],
          ValidateAudience = true,
          ValidAudience = jwtSection["Audience"],
          ValidateIssuerSigningKey = true,
          IssuerSigningKey = new SymmetricSecurityKey(keyBytes),
          ValidateLifetime = true,
      };
  });

// CORS y Controllers
builder.Services.AddCors(p => p.AddDefaultPolicy(policy =>
    policy.WithOrigins("http://localhost:4200")
          .AllowAnyHeader()
          .AllowAnyMethod()));
builder.Services.AddControllers();

var app = builder.Build();

// Nota: sólo HTTP
// app.UseHttpsRedirection();

app.UseCors();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.Run();


