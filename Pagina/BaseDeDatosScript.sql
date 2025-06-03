-- 1. Usuarios
CREATE TABLE dbo.Users (
    Id             INT            IDENTITY(1,1) PRIMARY KEY,
    Username       NVARCHAR(50)   NOT NULL UNIQUE,
    Email          NVARCHAR(100)  NOT NULL UNIQUE,
    PasswordHash   VARBINARY(64)  NOT NULL,
    PasswordSalt   VARBINARY(128) NOT NULL,
    Role           NVARCHAR(20)   NOT NULL,       -- 'Admin','User'
    CreatedAt      DATETIME2      NOT NULL DEFAULT GETDATE()
);

-- 2. Géneros
CREATE TABLE dbo.Genres (
    Id    INT          IDENTITY(1,1) PRIMARY KEY,
    Name  NVARCHAR(50) NOT NULL UNIQUE
);

-- 3. Películas
CREATE TABLE dbo.Movies (
    Id               INT            IDENTITY(1,1) PRIMARY KEY,
    Title            NVARCHAR(200)  NOT NULL,
    ImagePath        NVARCHAR(200)  NOT NULL,
    ShortDescription NVARCHAR(500)  NOT NULL,
    FullDescription  NVARCHAR(MAX)  NOT NULL,
    ReleaseDate      DATE           NULL,
    CreatedAt        DATETIME2      NOT NULL DEFAULT GETDATE()
);

-- 4. Series
CREATE TABLE dbo.Series (
    Id               INT            IDENTITY(1,1) PRIMARY KEY,
    Title            NVARCHAR(200)  NOT NULL,
    ImagePath        NVARCHAR(200)  NOT NULL,
    ShortDescription NVARCHAR(500)  NOT NULL,
    FullDescription  NVARCHAR(MAX)  NOT NULL,
    Seasons          INT            NOT NULL DEFAULT 1,
    CreatedAt        DATETIME2      NOT NULL DEFAULT GETDATE()
);

-- 5. Relación N‑M Movies ↔ Genres
CREATE TABLE dbo.MovieGenres (
    MovieId INT NOT NULL
        CONSTRAINT FK_MovieGenres_Movies FOREIGN KEY REFERENCES dbo.Movies(Id),
    GenreId INT NOT NULL
        CONSTRAINT FK_MovieGenres_Genres FOREIGN KEY REFERENCES dbo.Genres(Id),
    CONSTRAINT PK_MovieGenres PRIMARY KEY (MovieId, GenreId)
);

-- 6. Relación N‑M Series ↔ Genres
CREATE TABLE dbo.SeriesGenres (
    SeriesId INT NOT NULL
        CONSTRAINT FK_SeriesGenres_Series FOREIGN KEY REFERENCES dbo.Series(Id),
    GenreId  INT NOT NULL
        CONSTRAINT FK_SeriesGenres_Genres FOREIGN KEY REFERENCES dbo.Genres(Id),
    CONSTRAINT PK_SeriesGenres PRIMARY KEY (SeriesId, GenreId)
);

-- 7. Favoritos
CREATE TABLE dbo.Favorites (
    Id       INT       IDENTITY(1,1) PRIMARY KEY,
    UserId   INT       NOT NULL
        CONSTRAINT FK_Favorites_Users FOREIGN KEY REFERENCES dbo.Users(Id),
    MovieId  INT       NULL
        CONSTRAINT FK_Favorites_Movies FOREIGN KEY REFERENCES dbo.Movies(Id),
    SeriesId INT       NULL
        CONSTRAINT FK_Favorites_Series FOREIGN KEY REFERENCES dbo.Series(Id),
    AddedAt  DATETIME2 NOT NULL DEFAULT GETDATE(),
    CONSTRAINT CK_Favorites_OneType CHECK (
      (MovieId IS NOT NULL AND SeriesId IS NULL)
      OR (MovieId IS NULL AND SeriesId IS NOT NULL)
    )
);

-- 8. Refresh Tokens
CREATE TABLE dbo.RefreshTokens (
    Token       NVARCHAR(200) PRIMARY KEY,
    UserId      INT           NOT NULL
        CONSTRAINT FK_RefreshTokens_Users FOREIGN KEY REFERENCES dbo.Users(Id),
    ExpiresAt   DATETIME2     NOT NULL,
    CreatedAt   DATETIME2     NOT NULL DEFAULT GETDATE()
);
