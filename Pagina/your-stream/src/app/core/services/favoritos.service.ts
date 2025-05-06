import { Injectable } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs';


export interface FavoriteCard {
  id: number;
  title: string;
  image: string;
  genres: string;
  shortDescription: string;
  fullDescription: string;
  showFullText: boolean;
  isDeleting: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  // Datos mock (simulados) 
  private mockCards: FavoriteCard[] = [
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
    {
      id: 4,
      title: 'Gladiador II',
      image: 'assets/imagenes/Gladiadorll.webp',
      genres: 'Acción, Aventura, Drama',
      shortDescription: 'Lucio, testigo de la caída del héroe Máximo, es forzado a combatir en el Coliseo...',
      fullDescription: 'Lucio, testigo de la caída del héroe Máximo, es forzado a combatir en el Coliseo cuando su hogar es esclavizado por los nuevos tiranos de Roma. Con la memoria de Máximo como guía, deberá encontrar el valor para desafiar al imperio y restaurar su honor perdido.',
      showFullText: false,
      isDeleting: false
    }
  ];


    getFavoritos(): Observable<FavoriteCard[]> {
    return of([...this.mockCards]).pipe(
      delay(1000) // Simula tiempo de API
    );
  }

  /**
   * Simula eliminación (solo actualiza estado, no borra).
   * @param id ID de la tarjeta
   */
  toggleDeleteState(id: number): Observable<void> {
    const card = this.mockCards.find(c => c.id === id);
    if (card) {
      card.isDeleting = !card.isDeleting;
    }
    return of(undefined).pipe(delay(300)); // Simula tiempo de API
  }
}