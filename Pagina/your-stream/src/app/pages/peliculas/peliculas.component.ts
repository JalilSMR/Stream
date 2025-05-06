import { Component, OnInit, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasService, MovieCard } from '../../core/services/peliculas.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer } from 'rxjs';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  movieCards: MovieCard[] = [];
  private destroyRef = inject(DestroyRef);

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.peliculasService.getMovies()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(movies => this.movieCards = movies);
  }

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

      timer(2000)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.movieCards = this.movieCards.filter(c => c.id !== cardId);
        });
    }
  }
}
