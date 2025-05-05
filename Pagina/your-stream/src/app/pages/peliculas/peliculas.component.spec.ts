import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PeliculasComponent } from './peliculas.component';
import { of, delay } from 'rxjs';
import { PeliculasService, MovieCard } from '../../core/services/peliculas.service';
import { CommonModule } from '@angular/common';

describe('PeliculasComponent', () => {
  let component: PeliculasComponent;
  let fixture: ComponentFixture<PeliculasComponent>;
  let mockService: jasmine.SpyObj<PeliculasService>;

  const mockMovies: MovieCard[] = [
    {
      id: 1,
      title: 'Demo',
      image: 'test.jpg',
      genres: 'Aventura',
      shortDescription: 'Corta',
      fullDescription: 'Larga',
      showFullText: false,
      isDeleting: false
    }
  ];

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('PeliculasService', ['getMovies']);
    mockService.getMovies.and.returnValue(of(mockMovies));

    await TestBed.configureTestingModule({
      imports: [PeliculasComponent, CommonModule],
      providers: [
        { provide: PeliculasService, useValue: mockService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar las películas desde el servicio', () => {
    expect(component.movieCards.length).toBe(1);
    expect(component.movieCards[0].title).toBe('Demo');
  });

  it('debería alternar showFullText al hacer toggleText', () => {
    const movie = component.movieCards[0];
    expect(movie.showFullText).toBeFalse();

    component.toggleText(movie);
    expect(movie.showFullText).toBeTrue();

    component.toggleText(movie);
    expect(movie.showFullText).toBeFalse();
  });

  it('debería eliminar una tarjeta después de 2 segundos', fakeAsync(() => {
    expect(component.movieCards.length).toBe(1);

    component.deleteCard(1);
    expect(component.movieCards[0].isDeleting).toBeTrue();

    tick(2000);
    expect(component.movieCards.length).toBe(0);
  }));
});
