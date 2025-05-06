import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, catchError, finalize, of, tap, delay, map } from 'rxjs';
import { HomeService, MovieCard } from '../../core/services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieCards$!: Observable<MovieCard[]>;
  private allCards: MovieCard[] = [];
  loading = false;
  error: string | null = null;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.loading = true;
    this.error = null;

    this.movieCards$ = this.homeService.getMovies().pipe(
      tap(cards => this.allCards = cards),
      catchError(err => {
        this.error = 'Error al cargar películas';
        return of([]);
      }),
      finalize(() => (this.loading = false))
    );
  }

  toggleText(card: MovieCard): void {
    card.showFullText = !card.showFullText;
  }

  deleteCard(cardId: number): void {
    const card = this.allCards.find(c => c.id === cardId);
    if (card) {
      card.isDeleting = true;
      setTimeout(() => {
        this.allCards = this.allCards.filter(c => c.id !== cardId);
        this.movieCards$ = of(this.allCards);
      }, 1500);
    }
  }

  getRowCards(cards: MovieCard[], rowIndex: number): MovieCard[] {
    const startIndex = rowIndex * 3;
    return cards.slice(startIndex, startIndex + 3);
  }
}


