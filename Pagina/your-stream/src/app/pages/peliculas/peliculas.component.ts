import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MovieCard {
  id: number;
  title: string;
  image: string;
  genres: string;
  shortDescription: string;
  fullDescription: string;
  showFullText: boolean;
  isDeleting: boolean;
}

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent {
  movieCards: MovieCard[] = [
    {
      id: 1,
      title: 'Snow White',
      image: 'assets/imagenes/SnowWhite.webp',
      genres: 'Familia, Fantasia',
      shortDescription: 'Perseguida por la Reina Malvada, Blancanieves encuentra refugio en el bosque...',
      fullDescription: 'Perseguida por la Reina Malvada, Blancanieves encuentra refugio en el bosque junto a siete enanos y el ladrón Jonathan. Juntos, enfrentarán la amenaza real mientras luchan por recuperar el reino que le pertenece.',
      showFullText: false,
      isDeleting: false
    },
    {
      id: 2,
      title: 'Mickey 17',
      image: 'assets/imagenes/Mickey17.webp',
      genres: 'Ciencia Ficción, Comedia, Aventura',
      shortDescription: 'En el peor trabajo de la historia, Mickey Barnes aprende la letra pequeña...',
      fullDescription: 'En el peor trabajo de la historia, Mickey Barnes aprende la letra pequeña: "cláusula de mortalidad incluida". Ahora, entre resurrecciones incómodas y juntas post-mortem, deberá ascender en esta empresa donde el rendimiento se mide en muertes... ¡y las renuncias están prohibidas!',
      showFullText: false,
      isDeleting: false
    },
    {
      id: 3,
      title: 'Capitán América: Un Nuevo Mundo Valiente',
      image: 'assets/imagenes/CapitánAmérica.webp',
      genres: 'Acción, Ciencia Fición',
      shortDescription: 'Tras reunirse con el recién electo presidente de los EE. UU., Thaddeus Ross, Sam Wilson se ve envuelto en un incidente internacional...',
      fullDescription: 'Tras reunirse con el recién electo presidente de los EE. UU., Thaddeus Ross, Sam Wilson se ve envuelto en un incidente internacional. Deberá descubrir la razón detrás de una maquinación global antes de que el verdadero cerebro tras el plan logre que el mundo entero se vuelva rojo de ira.',
      showFullText: false,
      isDeleting: false
    },
    {
      id: 4,
      title: 'Moana 2',
      image: 'assets/imagenes/Moana2.webp',
      genres: 'Animación, Aventura, Familia, Comedia',
      shortDescription: 'Tras recibir una misteriosa llamada de sus ancestros navegantes, Moana se embarca junto a Maui...',
      fullDescription: 'Tras recibir una misteriosa llamada de sus ancestros navegantes, Moana se embarca junto a Maui y una nueva tripulación hacia los mares lejanos de Oceanía, adentrándose en aguas peligrosas y olvidadas para vivir una aventura como ninguna otra.',
      showFullText: false,
      isDeleting: false
    },
    {
      id: 5,
      title: 'Flow',
      image: 'assets/imagenes/Flow.webp',
      genres: 'Animación, Fantasia, Aventura',
      shortDescription: 'Un gato solitario, desplazado por una gran inundación, encuentra refugio en un barco...',
      fullDescription: 'Un gato solitario, desplazado por una gran inundación, encuentra refugio en un barco junto a diversas especies. Juntos, deberán enfrentar los desafíos de adaptarse a un mundo transformado, aprendiendo a sobrevivir y tal vez a convivir en medio de la incertidumbre.',
      showFullText: false,
      isDeleting: false
    },
    {
      id: 6,
      title: 'Deadpool & Wolverine',
      image: 'assets/imagenes/Deadpool&Wolverine.webp',
      genres: 'Acción, Comedia, Ciencia Ficción',
      shortDescription: 'Deadpool, retirado de su vida como mercenario, se ve forzado a regresar cuando una amenaza apocalíptica emerge...',
      fullDescription: 'Deadpool, retirado de su vida como mercenario, se ve forzado a regresar cuando una amenaza apocalíptica emerge. Sin opciones y con el destino del mundo en juego, arrastrará a un reacio Wolverine a una misión que ninguno de los dos quiere pero que solo ellos pueden resolver.',
      showFullText: false,
      isDeleting: false
    },
    {
      id: 7,
      title: 'Gladiador II',
      image: 'assets/imagenes/Gladiadorll.webp',
      genres: 'Acción, Aventura, Drama',
      shortDescription: 'Lucio, testigo de la caída del héroe Máximo, es forzado a combatir en el Coliseo...',
      fullDescription: 'Lucio, testigo de la caída del héroe Máximo, es forzado a combatir en el Coliseo cuando su hogar es esclavizado por los nuevos tiranos de Roma. Con la memoria de Máximo como guía, deberá encontrar el valor para desafiar al imperio y restaurar su honor perdido.',
      showFullText: false,
      isDeleting: false
    }
  ];

  getRowCards(rowIndex: number): MovieCard[] {
    const startIndex = rowIndex * 3;
    return this.movieCards.slice(startIndex, startIndex + 3);
  }

  toggleText(card: MovieCard): void {
    card.showFullText = !card.showFullText;
  }

  deleteCard(cardId: number): void {
    const card = this.movieCards.find(c => c.id === cardId);
    if (card) {
      card.isDeleting = true;
      setTimeout(() => {
        this.movieCards = this.movieCards.filter(c => c.id !== cardId);
      }, 2000);
    }
  }
}