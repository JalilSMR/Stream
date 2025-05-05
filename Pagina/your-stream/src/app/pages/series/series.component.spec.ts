import { delay, shareReplay } from 'rxjs/operators';
import { of } from 'rxjs';
import { SeriesService, SeriesCard } from '../../core/services/series.service';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';

describe('SeriesService', () => {
  let service: SeriesService;
  const mockCards: SeriesCard[] = [
    { id: 1, title: 'A', image: '', genres: 'G', shortDescription: '', fullDescription: '', showFullText: false, isDeleting: false },
    { id: 2, title: 'B', image: '', genres: 'G', shortDescription: '', fullDescription: '', showFullText: false, isDeleting: false },
    { id: 3, title: 'C', image: '', genres: 'G', shortDescription: '', fullDescription: '', showFullText: false, isDeleting: false },
    { id: 4, title: 'D', image: '', genres: 'G', shortDescription: '', fullDescription: '', showFullText: false, isDeleting: false }
  ];

  beforeEach(() => {
    service = new SeriesService();
    (service as any).cards$ = of(mockCards).pipe(delay(300), shareReplay(1));
  });

  it('debería crearse', () => expect(service).toBeTruthy());

  it('getSeries retorna todas tras delay', fakeAsync(() => {
    let result: SeriesCard[] | undefined;
    service.getSeries().subscribe(v => result = v);
    tick(300);
    expect(result).toEqual(mockCards);
  }));

  it('getRows agrupa en filas de 3', fakeAsync(() => {
    let rows: SeriesCard[][] | undefined;
    service.getRows().subscribe(v => rows = v);
    tick(300);
    expect(rows).toBeDefined();
    expect(rows!.length).toBe(2);
    expect(rows![0].length).toBe(3);
    expect(rows![1].length).toBe(1);
  }));
});

describe('SeriesComponent', () => {
  let component: SeriesComponent;
  let fixture: ComponentFixture<SeriesComponent>;
  const mockCards: SeriesCard[] = [
    { id: 1, title: 'X', image: '', genres: 'G', shortDescription: '', fullDescription: '', showFullText: false, isDeleting: false }
  ];
  let stubService: Partial<SeriesService>;

  beforeEach(async () => {
    stubService = { getRows: () => of([mockCards]) };

    await TestBed.configureTestingModule({
      imports: [CommonModule, SeriesComponent],
      providers: [{ provide: SeriesService, useValue: stubService }]
    }).compileComponents();

    fixture = TestBed.createComponent(SeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('renderiza correctamente filas', fakeAsync(() => {
    let rows: SeriesCard[][] | undefined;
    component.rows$.subscribe(v => rows = v);
    tick(0);
    expect(rows).toBeDefined();
    expect(rows!.length).toBe(1);
    expect(rows![0][0].title).toBe('X');
  }));

  it('almacena el trackBy', () => {
    const id = component.trackById(0, mockCards[0]);
    expect(id).toBe(1);
  });
});

describe('SeriesComponent', () => {
  let component: SeriesComponent;
  let fixture: ComponentFixture<SeriesComponent>;
  let mock: SeriesCard[];
  let stubService: Partial<SeriesService>;

  beforeEach(async () => {
    mock = [
      { id: 1, title: 'X', image: '', genres: 'G', shortDescription: '', fullDescription: '', showFullText: false, isDeleting: false }
    ];
    stubService = { getRows: () => of([mock]) };

    await TestBed.configureTestingModule({
      imports: [CommonModule, SeriesComponent],
      providers: [{ provide: SeriesService, useValue: stubService }]
    }).compileComponents();

    fixture = TestBed.createComponent(SeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('renderiza correctamente filas', fakeAsync(() => {
    let rows: SeriesCard[][] | undefined;
    component.rows$.subscribe(v => rows = v);
    tick(0);
    expect(rows).toBeDefined();
    expect(rows!.length).toBe(1);
    expect(rows![0][0].title).toBe('X');
  }));

  it('almacena el trackBy', () => {
    const result = component.trackById(0, mock[0]);
    expect(result).toBe(1);
  });
});