import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favoritos',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent {
  tarjetas = [
    {
      titulo: 'Animación, Acción, Aventura, Ciencia Ficción, Fantasía',
      descripcion: 'Dicen que lo que no te mata te hace más fuerte...',
      imagen: 'assets/imagenes/SoloLeveling.webp',
      mostrar: true
    },
    {
      titulo: 'Ciencia Ficción, Comedia, Aventura',
      descripcion: 'Mickey Barnes, un anti-héroe accidental...',
      imagen: 'assets/imagenes/Mickey17.webp',
      mostrar: true
    },
    {
      titulo: 'Acción, Ciencia Ficción',
      descripcion: 'Tras reunirse con el recién electo presidente...',
      imagen: 'assets/imagenes/CapitánAmérica.webp',
      mostrar: true
    }
  ];

  toggleMostrar(i: number) {
    this.tarjetas[i].mostrar = !this.tarjetas[i].mostrar;
  }

  eliminarTarjeta(i: number) {
    this.tarjetas.splice(i, 1);
  }
}