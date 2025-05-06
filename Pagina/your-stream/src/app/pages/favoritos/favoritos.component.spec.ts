import { ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { FavoritosComponent } from './favoritos.component';
import { FavoritosService } from '../../core/services/favoritos.service';
import { of, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';

describe('FavoritosComponent', () => {
  let component: FavoritosComponent;
  let fixture: ComponentFixture<FavoritosComponent>;
  let mockService: jasmine.SpyObj<FavoritosService>;

  const mockData = [{
    id: 1,
    title: 'Test Card',
    image: 'test.jpg',
    genres: 'Action',
    shortDescription: 'Short description',
    fullDescription: 'Full description',
    showFullText: false,
    isDeleting: false
  }];

  beforeEach(() => {
    mockService = jasmine.createSpyObj('FavoritosService', ['getFavoritos', 'toggleDeleteState']);

    TestBed.configureTestingModule({
      imports: [FavoritosComponent, CommonModule],
      providers: [
        { provide: FavoritosService, useValue: mockService }
      ]
    });

    fixture = TestBed.createComponent(FavoritosComponent);
    component = fixture.componentInstance;
  });

  it('debería crear el componente correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar favoritos correctamente', fakeAsync(() => {
    mockService.getFavoritos.and.returnValue(of(mockData));

    component.ngOnInit();
    tick();

    expect(component.favorites.length).toBe(1);
    expect(component.loading).toBeFalse();
    expect(component.error).toBeNull();

    flush();
  }));

  it('debería manejar errores al cargar favoritos', fakeAsync(() => {
    mockService.getFavoritos.and.returnValue(throwError(() => new Error('Error simulado')));

    component.ngOnInit();
    tick();

    expect(component.favorites.length).toBe(0);
    expect(component.loading).toBeFalse();
    expect(component.error).toBe('Error al cargar favoritos');

    flush();
  }));

  it('debería llamar al servicio al eliminar una tarjeta', fakeAsync(() => {
    mockService.getFavoritos.and.returnValue(of(mockData));
    mockService.toggleDeleteState.and.returnValue(of(undefined));

    component.ngOnInit();
    tick();

    const cardId = mockData[0].id;
    component.deleteCard(cardId);

    expect(mockService.toggleDeleteState).toHaveBeenCalledWith(cardId);

    flush();
  }));
});
