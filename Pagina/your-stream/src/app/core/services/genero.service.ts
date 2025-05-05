import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, shareReplay, map } from 'rxjs/operators';

export interface MediaCard {
  id: number;
  title: string;
  image: string;
  genres: string;
  shortDescription: string;
  fullDescription: string;
  showFullText: boolean;
  isDeleting: boolean;
}

@Injectable({ providedIn: 'root' })
export class GeneroService {
  // Datos de ejemplo; en producción, vendrían de un API
  private mediaCards: MediaCard[]  = [
     //Animación
    {
      id: 1,
      title: 'Solo Leveling',
      image: 'assets/imagenes/SoloLeveling.webp',
      genres: 'Animación, Acción, Aventura, Ciencia Ficción, Fantasía',
      shortDescription: 'Tras ser brutalmente masacrado en una mazmorra, Sung Jinwoo, el cazador más débil...',
      fullDescription: 'Tras ser brutalmente masacrado en una mazmorra, Sung Jinwoo, el cazador más débil, despierta con el Sistema, un poder único que lo fortalece progresivamente. Ahora, debe descubrir los secretos detrás de esta habilidad y la mazmorra que lo cambió para siempre.',
      showFullText: false,
      isDeleting: false
    },
    {
      id: 2,
      title: 'Chihayafuru',
      image: 'assets/imagenes/Chihayafuru.webp',
      genres: 'Animación, Drama',
      shortDescription: 'Chihaya Ayase descubre su pasión por el karuta gracias a Arata...',
      fullDescription: 'Chihaya Ayase descubre su pasión por el karuta gracias a Arata, abandonando su vida como soporte de su hermana. Años después, ya en preparatoria, entrena incansablemente con un doble objetivo: reunir a sus amigos de la infancia y conquistar juntos el torneo Hyakunin Isshu.',
      showFullText: false,
      isDeleting: false
    },
    {
      id: 3,
      title: 'Flow',
      image: 'assets/imagenes/Flow.webp',
      genres: 'Animación, Fantasía, Aventura',
      shortDescription: 'Un gato solitario, desplazado por una gran inundación...',
      fullDescription: 'Un gato solitario, desplazado por una gran inundación, encuentra refugio en un barco junto a diversas especies. Juntos, deberán enfrentar los desafíos de adaptarse a un mundo transformado, aprendiendo a sobrevivir y tal vez a convivir en medio de la incertidumbre.',
      showFullText: false,
      isDeleting: false
    },

    {
      id: 4,
      title: 'Rick y Morty',
      image: 'assets/imagenes/RickYMorty.webp',
      genres: 'Animación, Comedia, Acción, Aventura, Fantasía, Ciencia Ficción',
      shortDescription: 'Rick, un científico brillante pero inestable...',
      fullDescription: 'Rick, un científico brillante pero inestable, regresa después de años y arrastra a su nieto Morty a viajes interdimensionales llenos de caos. Mientras exploran el multiverso, las aventuras desgastan la ya frágil vida familiar y escolar de Morty.',
      showFullText: false,
      isDeleting: false
    },
    {
      id: 5,
      title: 'Las sombrías aventuras de Billy y Mandy',
      image: 'assets/imagenes/BillyYMandy.webp',
      genres: 'Animación, Comedia',
      shortDescription: 'Billy y Mandy ganan una apuesta diabólica...',
      fullDescription: 'Billy y Mandy, dos niños implacables, ganan una apuesta diabólica y condenan a la Muerte a ser su amigo eterno. Ahora, el Poderoso Segador atrapado en el aburrido Endsville sobrevive a sus absurdas travesuras.',
      showFullText: false,
      isDeleting: false
    },
    {
      id: 6,
      title: 'Invencible',
      image: 'assets/imagenes/INVINCIBLE.webp',
      genres: 'Animación, Ciencia Ficción, Fantasía, Acción, Aventura, Drama',
      shortDescription: 'Mark Grayson descubre que heredó poderes...',
      fullDescription: 'Mark Grayson, un adolescente aparentemente normal, descubre que heredó los poderes de su padre, Omni-Man, el héroe más poderoso del planeta. Pero su entrenamiento se convierte en una crisis existencial cuando un oscuro legado familiar lo fuerza a cuestionar todo.',
      showFullText: false,
      isDeleting: false
    },

    //Acción
    {
      id: 7,
      title: 'Deadpool & Wolverine',
      image: 'assets/imagenes/Deadpool&Wolverine.webp',
      genres: 'Acción, Comedia, Ciencia Ficción',
      shortDescription: 'Deadpool se ve forzado a regresar...',
      fullDescription: 'Deadpool, retirado de su vida como mercenario, se ve forzado a regresar cuando una amenaza apocalíptica emerge. Sin opciones y con el destino del mundo en juego, arrastrará a un reacio Wolverine a una misión que ninguno de los dos quiere pero que solo ellos pueden resolver.',
      showFullText: false,
      isDeleting: false
    },
    {
      id: 8,
      title: 'Gladiador II',
      image: 'assets/imagenes/Gladiadorll.webp',
      genres: 'Acción, Aventura, Drama',
      shortDescription: 'Lucio, testigo de la caída del héroe Máximo...',
      fullDescription: 'Lucio, testigo de la caída del héroe Máximo, es forzado a combatir en el Coliseo cuando su hogar es esclavizado por los nuevos tiranos de Roma. Con la memoria de Máximo como guía, deberá encontrar el valor para desafiar al imperio y restaurar su honor perdido.',
      showFullText: false,
      isDeleting: false
    },
    {
      id: 9,
      title: 'Capitán América: Un Nuevo Mundo Valiente',
      image: 'assets/imagenes/CapitánAmérica.webp',
      genres: 'Acción, Ciencia Ficción',
      shortDescription: 'Tras reunirse con el presidente de los EE. UU....',
      fullDescription: 'Tras reunirse con el recién electo presidente de los EE. UU., Thaddeus Ross, Sam Wilson se ve envuelto en un incidente internacional. Deberá descubrir la razón detrás de una maquinación global antes de que el verdadero cerebro tras el plan logre que el mundo entero se vuelva rojo de ira.',
      showFullText: false,
      isDeleting: false
    },

    //Ciencia Ficción
    {
      id: 10,
      title: 'Mickey 17',
      image: 'assets/imagenes/Mickey17.webp',
      genres: 'Ciencia Ficción, Comedia, Aventura',
      shortDescription: 'En el peor trabajo de la historia...',
      fullDescription: 'En el peor trabajo de la historia, Mickey Barnes aprende la letra pequeña: "cláusula de mortalidad incluida". Ahora, entre resurrecciones incómodas y juntas post-mortem, deberá ascender en esta empresa donde el rendimiento se mide en muertes... ¡y las renuncias están prohibidas!',
      showFullText: false,
      isDeleting: false
    },
    {
      id: 11,
      title: 'The Walking Dead',
      image: 'assets/imagenes/TheWalkingDead.webp',
      genres: 'Acción, Aventura, Drama, Fantasía, Ciencia Ficción',
      shortDescription: 'Rick Grimes despierta en un mundo apocalíptico...',
      fullDescription: 'Rick Grimes despierta en un mundo apocalíptico dominado por zombis. Guiado por su instinto policial, inicia una búsqueda desesperada de su familia, enfrentándose tanto a los no-muertos como a supervivientes aún más peligrosos en esta nueva realidad sin ley.',
      showFullText: false,
      isDeleting: false
    },
    {
      id: 12,
      title: 'Game of Thrones',
      image: 'assets/imagenes/GameofThrones.webp',
      genres: 'Ciencia Ficción, Fantasía, Drama, Acción, Aventura',
      shortDescription: 'Siete casas nobles libran una guerra sangrienta...',
      fullDescription: 'Siete casas nobles libran una guerra sangrienta por el Trono de Hierro en Poniente, ignorando la verdadera amenaza: un ejército de criaturas de hielo que avanza desde el norte. Solo la Guardia de la Noche, una hermandad de marginados, se interpone entre el reino y la oscuridad eterna.',
      showFullText: false,
      isDeleting: false
    },

    //Familia
    {
      id: 13,
      title: 'Moana 2',
      image: 'assets/imagenes/Moana2.webp',
      genres: 'Animación, Aventura, Familia, Comedia',
      shortDescription: 'Tras recibir una misteriosa llamada...',
      fullDescription: 'Tras recibir una misteriosa llamada de sus ancestros navegantes, Moana se embarca junto a Maui y una nueva tripulación hacia los mares lejanos de Oceanía, adentrándose en aguas peligrosas y olvidadas para vivir una aventura como ninguna otra.',
      showFullText: false,
      isDeleting: false
    },
    {
      id: 14,
      title: 'Snow White',
      image: 'assets/imagenes/SnowWhite.webp',
      genres: 'Familia, Fantasía',
      shortDescription: 'Perseguida por la Reina Malvada...',
      fullDescription: 'Perseguida por la Reina Malvada, Blancanieves encuentra refugio en el bosque junto a siete enanos y el ladrón Jonathan. Juntos, enfrentarán la amenaza real mientras luchan por recuperar el reino que le pertenece.',
      showFullText: false,
      isDeleting: false
    },
    {
      id: 15,
      title: 'Natsume\'s Book of Friends',
      image: 'assets/imagenes/Natsume\'sBookofFriends.webp',
      genres: 'Animación, Comedia, Familia',
      shortDescription: 'Natsume Takashi, un joven capaz de ver espíritus...',
      fullDescription: 'Natsume Takashi, un joven capaz de ver espíritus, hereda el "Libro de los Amigos" de su abuela, descubriendo por qué los yokai lo persiguen. Al devolver los nombres robados, busca reconciliar ambos mundos y encontrar, por fin, su verdadero lugar.',
      showFullText: false,
      isDeleting: false
    }
  ];

// Observable con caché y delay simulado
  private cards$ = of(this.mediaCards).pipe(
    delay(300),        // simula latencia
    shareReplay(1)     // cache
  );

  /** Devuelve todas las tarjetas */
  getMediaCards(): Observable<MediaCard[]> {
    return this.cards$;
  }

  /** Filtra tarjetas por género */
  getMediaCardsByGenre(genre: string): Observable<MediaCard[]> {
    return this.getMediaCards().pipe(
      map(cards => cards.filter(c => c.genres.includes(genre)))
    );
  }

  /** Agrupa tarjetas por género */
  getGroupedByGenre(): Observable<{ [genre: string]: MediaCard[] }> {
    return this.getMediaCards().pipe(
      map(cards => {
        const groups: { [key: string]: MediaCard[] } = {};
        cards.forEach(card => {
          card.genres.split(',').map(g => g.trim()).forEach(g => {
            groups[g] = groups[g] || [];
            groups[g].push({ ...card });
          });
        });
        return groups;
      })
    );
  }
}
