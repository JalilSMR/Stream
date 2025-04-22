import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FavoriteCard {
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
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent {
  tarjetas: FavoriteCard[] = [
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
  ];

  // Obtener tarjetas por fila (3 por fila)
  getRowCards(rowIndex: number): FavoriteCard[] {
    const startIndex = rowIndex * 3;
    return this.tarjetas.slice(startIndex, startIndex + 3);
  }

  // Alternar entre texto completo y resumido
  toggleText(card: FavoriteCard): void {
    card.showFullText = !card.showFullText;
  }

  // Eliminar tarjeta con animación
  deleteCard(cardId: number): void {
    const card = this.tarjetas.find(c => c.id === cardId);
    if (card) {
      card.isDeleting = true;
      setTimeout(() => {
        this.tarjetas = this.tarjetas.filter(c => c.id !== cardId);
      }, 2000);
    }
  }
}