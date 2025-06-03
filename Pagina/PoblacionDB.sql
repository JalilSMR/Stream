-- 1.1 géneros
INSERT INTO dbo.Genres (Name)
VALUES
  ('Animación'),
  ('Acción'),
  ('Aventura'),
  ('Ciencia Ficción'),
  ('Fantasía'),
  ('Drama'),
  ('Comedia'),
  ('Familia');


-- 1.2 películas
INSERT INTO dbo.Movies (Title, ImagePath, ShortDescription, FullDescription, ReleaseDate)
VALUES
  (
    'Snow White',
    'assets/imagenes/SnowWhite.webp',
    'Perseguida por la Reina Malvada, Blancanieves encuentra refugio en el bosque...',
    'Perseguida por la Reina Malvada, Blancanieves encuentra refugio en el bosque junto a siete enanos y el ladrón Jonathan. Juntos, enfrentarán la amenaza real mientras luchan por recuperar el reino que le pertenece.',
    '2021-03-01'
  ),
  (
    'Mickey 17',
    'assets/imagenes/Mickey17.webp',
    'En el peor trabajo de la historia, Mickey Barnes aprende la letra pequeña...',
    'En el peor trabajo de la historia, Mickey Barnes aprende la letra pequeña: "cláusula de mortalidad incluida". Ahora, entre resurrecciones incómodas y juntas post-mortem, deberá ascender en esta empresa donde el rendimiento se mide en muertes... ¡y las renuncias están prohibidas!',
    '2024-02-14'
  ),
  (
    'Capitán América: Un Nuevo Mundo Valiente',
    'assets/imagenes/CapitánAmérica.webp',
    'Tras reunirse con el presidente de los EE. UU., Sam Wilson se ve envuelto en un incidente internacional...',
    'Tras reunirse con el recién electo presidente de los EE. UU., Thaddeus Ross, Sam Wilson se ve envuelto en un incidente internacional. Deberá descubrir la razón detrás de una maquinación global antes de que el verdadero cerebro tras el plan logre que el mundo entero se vuelva rojo de ira.',
    '2023-07-05'
  ),
  (
    'Moana 2',
    'assets/imagenes/Moana2.webp',
    'Tras recibir una misteriosa llamada de sus ancestros, Moana se embarca junto a Maui...',
    'Tras recibir una misteriosa llamada de sus ancestros navegantes, Moana se embarca junto a Maui y una nueva tripulación hacia los mares lejanos de Oceanía, adentrándose en aguas peligrosas y olvidadas para vivir una aventura como ninguna otra.',
    '2025-06-20'
  ),
  (
    'Invencible',
    'assets/imagenes/INVINCIBLE.webp',
    'Mark Grayson descubre que heredó poderes de su padre Omni-Man...',
    'Mark Grayson, un adolescente aparentemente normal, descubre que heredó los poderes de su padre, Omni-Man, el héroe más poderoso del planeta. Pero su entrenamiento se convierte en una crisis existencial cuando un oscuro legado familiar lo fuerza a cuestionar todo.',
    '2022-11-11'
  ),
  (
    'Deadpool & Wolverine',
    'assets/imagenes/Deadpool&Wolverine.webp',
    'Deadpool se ve forzado a regresar cuando una amenaza apocalíptica emerge...',
    'Deadpool, retirado de su vida como mercenario, se ve forzado a regresar cuando una amenaza apocalíptica emerge. Sin opciones y con el destino del mundo en juego, arrastrará a un reacio Wolverine a una misión que ninguno de los dos quiere pero que solo ellos pueden resolver.',
    '2024-10-02'
  ),
  (
    'Gladiador II',
    'assets/imagenes/Gladiadorll.webp',
    'Lucio, testigo de la caída del héroe Máximo, es forzado a combatir en el Coliseo...',
    'Lucio, testigo de la caída del héroe Máximo, es forzado a combatir en el Coliseo cuando su hogar es esclavizado por los nuevos tiranos de Roma. Con la memoria de Máximo como guía, deberá encontrar el valor para desafiar al imperio y restaurar su honor perdido.',
    '2023-05-18'
  ),
  (
    'The Walking Dead',
    'assets/imagenes/TheWalkingDead.webp',
    'Rick Grimes despierta en un mundo apocalíptico dominado por zombis...',
    'Rick Grimes despierta en un mundo apocalíptico dominado por zombis. Guiado por su instinto policial, inicia una búsqueda desesperada de su familia, enfrentándose tanto a los no-muertos como a supervivientes aún más peligrosos en esta nueva realidad sin ley.',
    '2010-10-31'
  ),
  (
    'Game of Thrones',
    'assets/imagenes/GameofThrones.webp',
    'Siete casas nobles libran una guerra sangrienta por el Trono de Hierro en Poniente...',
    'Siete casas nobles libran una guerra sangrienta por el Trono de Hierro en Poniente, ignorando la verdadera amenaza: un ejército de criaturas de hielo que avanza desde el norte. Solo la Guardia de la Noche, una hermandad de marginados, se interpone entre el reino y la oscuridad eterna.',
    '2011-04-17'
  );

-- 1.3 series
INSERT INTO dbo.Series (Title, ImagePath, ShortDescription, FullDescription, Seasons)
VALUES
  (
    'Solo Leveling',
    'assets/imagenes/SoloLeveling.webp',
    'Tras ser brutalmente masacrado, Sung Jinwoo despierta con un poder único...',
    'Tras ser brutalmente masacrado en una mazmorra, Sung Jinwoo, el cazador más débil, despierta con el Sistema, un poder único que lo fortalece progresivamente. Ahora, debe descubrir los secretos detrás de esta habilidad y la mazmorra que lo cambió para siempre.',
    1
  ),
  (
    'Chihayafuru',
    'assets/imagenes/Chihayafuru.webp',
    'Chihaya Ayase descubre su pasión por el karuta gracias a Arata...',
    'Chihaya Ayase descubre su pasión por el karuta gracias a Arata, abandonando su vida como soporte de su hermana. Años después, ya en preparatoria, entrena incansablemente con un doble objetivo: reunir a sus amigos de la infancia y conquistar juntos el torneo Hyakunin Isshu.',
    3
  ),
  (
    'Flow',
    'assets/imagenes/Flow.webp',
    'Un gato solitario, desplazado por una gran inundación, encuentra refugio en un barco...',
    'Un gato solitario, desplazado por una gran inundación, encuentra refugio en un barco junto a diversas especies. Juntos, deberán enfrentar los desafíos de adaptarse a un mundo transformado, aprendiendo a sobrevivir y tal vez a convivir en medio de la incertidumbre.',
    1
  ),
  (
    'Rick y Morty',
    'assets/imagenes/RickYMorty.webp',
    'Rick, un científico brillante pero inestable, regresa y arrastra a Morty a viajes interdimensionales...',
    'Rick, un científico brillante pero inestable, regresa después de años y arrastra a su nieto Morty a viajes interdimensionales llenos de caos. Mientras exploran el multiverso, las aventuras desgastan la ya frágil vida familiar y escolar de Morty.',
    5
  ),
  (
    'Las sombrías aventuras de Billy y Mandy',
    'assets/imagenes/BillyYMandy.webp',
    'Billy y Mandy ganan una apuesta diabólica y condenan a la Muerte a ser su amigo infinito...',
    'Billy y Mandy, dos niños implacables, ganan una apuesta diabólica y condenan a la Muerte a ser su amigo eterno. Ahora, el Poderoso Segador atrapado en el aburrido Endsville sobrevive a sus absurdas travesuras mientras lucha por conservar lo último que le queda: su (anti)dignidad sobrenatural.',
    2
  ),
  (
    'Invencible',
    'assets/imagenes/INVINCIBLE.webp',
    'Mark Grayson hereda los poderes de su padre Omni-Man y lidia con un legado oscuro...',
    'Mark Grayson, un adolescente aparentemente normal, descubre que heredó los poderes de su padre, Omni-Man, el héroe más poderoso del planeta. Pero su entrenamiento se convierte en una crisis existencial cuando un oscuro legado familiar lo fuerza a cuestionar todo.',
    3
  );

-- 1.4 relaciones Series

-- 'Animación' = Id 1, 'Acción' = Id 2, 'Aventura' = Id 3, 'Ciencia Ficción' = Id 4, 'Fantasía' = Id 5, 'Drama' = Id 6, 'Comedia' = Id 7, 'Familia' = Id 8

--  Snow White (Id 1) → Géneros: Familia (8), Fantasía (5)
INSERT INTO dbo.MovieGenres (MovieId, GenreId) VALUES (1, 8), (1, 5);

--  Mickey 17 (Id 2) → Géneros: Ciencia Ficción (4), Comedia (7), Aventura (3)
INSERT INTO dbo.MovieGenres (MovieId, GenreId) VALUES (2, 4), (2, 7), (2, 3);

--  Capitán América (Id 3) → Géneros: Acción (2), Ciencia Ficción (4)
INSERT INTO dbo.MovieGenres (MovieId, GenreId) VALUES (3, 2), (3, 4);

--  Moana 2 (Id 4) → Géneros: Animación (1), Aventura (3), Familia (8), Comedia (7)
INSERT INTO dbo.MovieGenres (MovieId, GenreId) VALUES (4, 1), (4, 3), (4, 8), (4, 7);

--  Invencible (Id 5) → Géneros: Animación (1), Ciencia Ficción (4), Fantasía (5), Acción (2), Aventura (3), Drama (6)
INSERT INTO dbo.MovieGenres (MovieId, GenreId) VALUES (5, 1), (5, 4), (5, 5), (5, 2), (5, 3), (5, 6);

--  Deadpool & Wolverine (Id 6) → Géneros: Acción (2), Comedia (7), Ciencia Ficción (4)
INSERT INTO dbo.MovieGenres (MovieId, GenreId) VALUES (6, 2), (6, 7), (6, 4);

--  Gladiador II (Id 7) → Géneros: Acción (2), Aventura (3), Drama (6)
INSERT INTO dbo.MovieGenres (MovieId, GenreId) VALUES (7, 2), (7, 3), (7, 6);

--  The Walking Dead (Id 8) → Géneros: Acción (2), Aventura (3), Drama (6), Fantasía (5), Ciencia Ficción (4)
INSERT INTO dbo.MovieGenres (MovieId, GenreId) VALUES (8, 2), (8, 3), (8, 6), (8, 5), (8, 4);

--  Game of Thrones (Id 9) → Géneros: Ciencia Ficción (4), Fantasía (5), Drama (6), Acción (2), Aventura (3)

INSERT INTO dbo.MovieGenres (MovieId, GenreId) VALUES (9, 4), (9, 5), (9, 6), (9, 2), (9, 3);




-- 1.5 Géneros a Series 

--  Solo Leveling (Id 1) → Géneros: Animación (1), Acción (2), Aventura (3), Ciencia Ficción (4), Fantasía (5)
INSERT INTO dbo.SeriesGenres (SeriesId, GenreId) VALUES (1, 1), (1, 2), (1, 3), (1, 4), (1, 5);

--  Chihayafuru (Id 2) → Géneros: Animación (1), Drama (6)
INSERT INTO dbo.SeriesGenres (SeriesId, GenreId) VALUES (2, 1), (2, 6);

--  Flow (Id 3) → Géneros: Animación (1), Fantasía (5), Aventura (3)
INSERT INTO dbo.SeriesGenres (SeriesId, GenreId) VALUES (3, 1), (3, 5), (3, 3);

--  Rick y Morty (Id 4) → Géneros: Animación (1), Comedia (7), Acción (2), Aventura (3), Fantasía (5), Ciencia Ficción (4)
INSERT INTO dbo.SeriesGenres (SeriesId, GenreId) VALUES (4, 1), (4, 7), (4, 2), (4, 3), (4, 5), (4, 4);

--  Billy y Mandy (Id 5) → Géneros: Animación (1), Comedia (7)
INSERT INTO dbo.SeriesGenres (SeriesId, GenreId) VALUES (5, 1), (5, 7);

--  Invencible (Id 6) → Géneros: Animación (1), Ciencia Ficción (4), Fantasía (5), Acción (2), Aventura (3), Drama (6)
INSERT INTO dbo.SeriesGenres (SeriesId, GenreId) VALUES (6, 1), (6, 4), (6, 5), (6, 2), (6, 3), (6, 6);