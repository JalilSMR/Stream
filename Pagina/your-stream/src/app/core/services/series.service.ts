import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, shareReplay, map } from 'rxjs/operators';

export interface SeriesCard {
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
export class SeriesService {
  private cards: SeriesCard[] = [
    {
    id: 1,
    title: 'Solo Leveling',
    image: 'assets/imagenes/SoloLeveling.webp',
    genres: 'Animación, Acción, Aventura, Ciencia Fición, Fantasia',
    shortDescription: 'Tras ser brutalmente masacrado en una mazmorra, Sung Jinwoo, el cazador más débil...',
    fullDescription: 'Tras ser brutalmente masacrado en una mazmorra, Sung Jinwoo, el cazador más débil, despierta con el Sistema, un poder único que lo fortalece progresivamente. Ahora, debe descubrir los secretos detrás de esta habilidad y la mazmorra que lo cambió para siempre.',
    showFullText: false,
    isDeleting: false
    },
    {
    id: 2,
    title: 'Invencible',
    image: 'assets/imagenes/INVINCIBLE.webp',
    genres: 'Animación, Ciencia Ficción, Fantasia, Acción, Aventura, Drama',
    shortDescription: 'Mark Grayson, un adolescente aparentemente normal, descubre que heredó los poderes de su padre...',
    fullDescription: 'Mark Grayson, un adolescente aparentemente normal, descubre que heredó los poderes de su padre, Omni-Man, el héroe más poderoso del planeta. Pero su entrenamiento se convierte en una crisis existencial cuando un oscuro legado familiar lo fuerza a cuestionar todo: desde su identidad hasta la verdadera naturaleza del heroísmo.',
    showFullText: false,
    isDeleting: false
    },
    {
    id: 3,
    title: 'Chihayafuru',
    image: 'assets/imagenes/Chihayafuru.webp',
    genres: 'Animación, Drama',
    shortDescription: 'Chihaya Ayase descubre su pasión por el karuta gracias a Arata...',
    fullDescription: 'Chihaya Ayase descubre su pasión por el karuta gracias a Arata, abandonando su vida como soporte de su hermana. Años después, ya en preparatoria, entrena incansablemente con un doble objetivo: reunir a sus amigos de la infancia y conquistar juntos el torneo Hyakunin Isshu.',
    showFullText: false,
    isDeleting: false
    },

    {
    id: 4,
    title: 'Natsume\'s Book of Friends',
    image: 'assets/imagenes/Natsume\'sBookofFriends.webp',
    genres: 'Animación, Comedia',
    shortDescription: 'Natsume Takashi, un joven capaz de ver espíritus, hereda el "Libro de los Amigos"...',
    fullDescription: 'Natsume Takashi, un joven capaz de ver espíritus, hereda el "Libro de los Amigos" de su abuela, descubriendo por qué los yokai lo persiguen. Al devolver los nombres robados, busca reconciliar ambos mundos y encontrar, por fin, su verdadero lugar.',
    showFullText: false,
    isDeleting: false
    },
    {
      id: 5,
    title: 'The Walking Dead',
    image: 'assets/imagenes/TheWalkingDead.webp',
    genres: 'Acción, Aventura, Drama, Fantasia, Ciencia Ficción',
    shortDescription: 'Rick Grimes despierta en un mundo apocalíptico dominado por zombis...',
    fullDescription: 'Rick Grimes despierta en un mundo apocalíptico dominado por zombis. Guiado por su instinto policial, inicia una búsqueda desesperada de su familia, enfrentándose tanto a los no-muertos como a supervivientes aún más peligrosos en esta nueva realidad sin ley.',
    showFullText: false,
    isDeleting: false
    },
    {
    id: 6,
    title: 'Game of Thrones',
    image: 'assets/imagenes/GameofThrones.webp',
    genres: 'Ciencia Ficción, Fantasia, Drama, Acción, Aventura',
    shortDescription: 'Siete casas nobles libran una guerra sangrienta por el Trono de Hierro en Poniente...',
    fullDescription: 'Siete casas nobles libran una guerra sangrienta por el Trono de Hierro en Poniente, ignorando la verdadera amenaza: un ejército de criaturas de hielo que avanza desde el norte. Solo la Guardia de la Noche, una hermandad de marginados, se interpone entre el reino y la oscuridad eterna.',
    showFullText: false,
    isDeleting: false
    },

    {
    id: 7,
    title: 'Rick y Morty',
    image: 'assets/imagenes/RickYMorty.webp',
    genres: 'Animación, Comedia, Acción, Aventura, Fantasia, Ciencia Ficción',
    shortDescription: 'Rick, un científico brillante pero inestable, regresa después de años...',
    fullDescription: 'Rick, un científico brillante pero inestable, regresa después de años y arrastra a su nieto Morty a viajes interdimensionales llenos de caos. Mientras exploran el multiverso, las aventuras desgastan la ya frágil vida familiar y escolar de Morty, dejándolo atrapado entre la emoción del cosmos y los problemas terrenales.',
    showFullText: false,
    isDeleting: false
    },
    {
    id: 8,
    title: 'Las sombrías aventuras de Billy y Mandy',
    image: 'assets/imagenes/BillyYMandy.webp',
    genres: 'Animación, Comedia',
    shortDescription: 'Billy y Mandy, dos niños implacables, ganan una apuesta diabólica...',
    fullDescription: 'Billy y Mandy, dos niños implacables, ganan una apuesta diabólica y condenan a la Muerte a ser su amigo eterno. Ahora, el Poderoso Segador atrapado en el aburrido Endsville sobrevive a sus absurdas travesuras mientras lucha por conservar lo último que le queda: su (anti)dignidad sobrenatural.',
    showFullText: false,
    isDeleting: false
    }
];

  private cards$ = of(this.cards).pipe(
    delay(300),
    shareReplay(1)
  );

  /** Devuelve todas las series */
  getSeries(): Observable<SeriesCard[]> {
    return this.cards$;
  }

  /** Agrupa en filas de 3 para la paginación visual */
  getRows(): Observable<SeriesCard[][]> {
    return this.cards$.pipe(
      map(list => {
        const rows: SeriesCard[][] = [];
        for (let i = 0; i < list.length; i += 3) {
          rows.push(list.slice(i, i + 3));
        }
        return rows;
      })
    );
  }
}