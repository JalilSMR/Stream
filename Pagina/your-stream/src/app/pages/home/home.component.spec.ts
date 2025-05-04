import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HomeService, MovieCard } from '../../core/services/home.service';
import { of, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockService: jasmine.SpyObj<HomeService>;

  const mockMovies: MovieCard[] = [
    {
      id: 1,
      title: 'Solo Leveling',
      image: 'assets/imagenes/SoloLeveling.webp',
      genres: 'Animación, Acción',
      shortDescription: 'Resumen corto',
      fullDescription: 'Descripción completa',
      showFullText: false,
      isDeleting: false
    }
  ];

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('HomeService', ['getMovies']);

    await TestBed.configureTestingModule({
      imports: [HomeComponent, CommonModule],
      providers: [
        { provide: HomeService, useValue: mockService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('debería cargar películas correctamente', fakeAsync(async () => {
    mockService.getMovies.and.returnValue(of(mockMovies));

    component.ngOnInit();
    tick(); // Simula paso del tiempo

    const cards = await firstValueFrom(component.movieCards$);
    expect(cards.length).toBe(1);
    expect(component.error).toBeNull();
    expect(component.loading).toBeFalse();
  }));

  it('debería manejar error al cargar películas', fakeAsync(async () => {
    mockService.getMovies.and.returnValue(throwError(() => new Error('Error simulado')));

    component.ngOnInit();
    tick(); // Simula el tiempo

    const cards = await firstValueFrom(component.movieCards$);
    expect(cards.length).toBe(0); // fallback
    expect(component.error).toBe('Error al cargar películas');
    expect(component.loading).toBeFalse();
  }));

  it('debería alternar entre descripción corta y completa', () => {
    const card = { ...mockMovies[0] };
    expect(card.showFullText).toBeFalse();
    component.toggleText(card);
    expect(card.showFullText).toBeTrue();
    component.toggleText(card);
    expect(card.showFullText).toBeFalse();
  });
});
