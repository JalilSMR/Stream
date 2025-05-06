import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { GeneroService, MediaCard } from '../../core/services/genero.service';

@Component({
  selector: 'app-generos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenerosComponent {
  groupedCards$: Observable<{ [genre: string]: MediaCard[] }>;
  trackById = (_: number, card: MediaCard) => card.id;

  constructor(private generoService: GeneroService) {
    this.groupedCards$ = this.generoService.getGroupedByGenre();
  }

  toggleText(card: MediaCard): void {
    card.showFullText = !card.showFullText;
  }

  deleteCard(card: MediaCard): void {
    card.isDeleting = true;
    setTimeout(() => {}, 500);
  }
}