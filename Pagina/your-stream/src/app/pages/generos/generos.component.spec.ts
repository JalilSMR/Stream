import { fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { delay, shareReplay } from 'rxjs/operators';
import { GeneroService, MediaCard } from '../../core/services/genero.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { GenerosComponent } from './generos.component';

describe('GenerosComponent', () => {
  let component: GenerosComponent;
  let fixture: ComponentFixture<GenerosComponent>;
  const mockCards: MediaCard[] = [{ id: 1, title: 'Test', image: '', genres: 'G', shortDescription: '', fullDescription: '', showFullText: false, isDeleting: false }];

  beforeEach(async () => {
    const serviceStub: Partial<GeneroService> = { getGroupedByGenre: () => of({ G: mockCards }) };
    await TestBed.configureTestingModule({
      imports: [CommonModule, GenerosComponent],
      providers: [{ provide: GeneroService, useValue: serviceStub }]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => expect(component).toBeTruthy());
  it('debería renderizar encabezados', () => {
    const headers = fixture.nativeElement.querySelectorAll('h3');
    expect(headers.length).toBe(1);
    expect(headers[0].textContent).toContain('G');
  });

  it('debería alternar texto completo', () => {
    component.groupedCards$.subscribe(groups => {
      const card = groups['G'][0];
      expect(card.showFullText).toBeFalse();
      component.toggleText(card);
      expect(card.showFullText).toBeTrue();
    });
  });
});

describe('GeneroService', () => {
  let service: GeneroService;
  const mockCards: MediaCard[] = [
    { id: 1, title: 'A', image: '', genres: 'G1', shortDescription: '', fullDescription: '', showFullText: false, isDeleting: false },
    { id: 2, title: 'B', image: '', genres: 'G2', shortDescription: '', fullDescription: '', showFullText: false, isDeleting: false }
  ];

  beforeEach(() => {
    service = new GeneroService();
    // Override interno cards$
    (service as any).cards$ = of(mockCards).pipe(delay(300), shareReplay(1));
  });

  it('debería crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('getMediaCards devuelve todo tras delay', fakeAsync(() => {
    let result: MediaCard[] | undefined;
    service.getMediaCards().subscribe(data => result = data);
    expect(result).toBeUndefined();
    tick(300);
    expect(result).toEqual(mockCards);
  }));

  it('getMediaCardsByGenre filtra por género', fakeAsync(() => {
    let result: MediaCard[] | undefined;
    service.getMediaCardsByGenre('G1').subscribe(data => result = data);
    tick(300);
    expect(result).toEqual([mockCards[0]]);
  }));

  it('getGroupedByGenre agrupa correctamente', fakeAsync(() => {
    let result: { [g: string]: MediaCard[] } | undefined;
    service.getGroupedByGenre().subscribe(data => result = data);
    tick(300);
    expect(result).toEqual({ G1: [mockCards[0]], G2: [mockCards[1]] });
  }));
});


