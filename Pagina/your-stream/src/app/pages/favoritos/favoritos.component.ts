import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosService, FavoriteCard } from '../../core/services/favoritos.service';
import { Observable, catchError, of, finalize } from 'rxjs';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  favorites: FavoriteCard[] = []; // <-- Añade esta propiedad
  loading = false;
  error: string | null = null;

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.loading = true;
    this.error = null;
    
    this.favoritosService.getFavoritos().pipe(
      catchError(error => {
        this.error = 'Error al cargar favoritos';
        return of([]);
      })
    ).subscribe(favorites => {
      this.favorites = favorites; // <-- Asigna los favoritos aquí
      this.loading = false;
    });
  }

  deleteCard(cardId: number): void {
    this.favoritosService.toggleDeleteState(cardId).subscribe(() => {
      this.loadCards(); // Recarga los favoritos después de eliminar
    });
  }
}