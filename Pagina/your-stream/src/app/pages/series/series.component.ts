import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SeriesService, SeriesCard } from '../../core/services/series.service';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeriesComponent {
  rows$: Observable<SeriesCard[][]>;
  trackById = (_: number, card: SeriesCard) => card.id;

  constructor(private service: SeriesService) {
    this.rows$ = this.service.getRows();
  }

  toggleText(card: SeriesCard): void {
    card.showFullText = !card.showFullText;
  }

  deleteCard(card: SeriesCard): void {
    card.isDeleting = true;
    setTimeout(() => {
    }, 500);
  }
}