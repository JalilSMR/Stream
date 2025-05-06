import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar.component';

@Component({ template: '' }) class DummyComponent {}

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [
        provideRouter([
          { path: '', component: DummyComponent },
          { path: 'generos', component: DummyComponent },
          { path: 'favoritos', component: DummyComponent },
          { path: 'series', component: DummyComponent },
          { path: 'peliculas', component: DummyComponent },
          { path: 'login', component: DummyComponent }
        ])
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('debería crearse', () => expect(component).toBeTruthy());

  it('debe navegar a /generos y activar enlace', async () => {
    const link: HTMLElement = fixture.nativeElement.querySelector('a[routerLink="/generos"]');
    link.click();
    await fixture.whenStable();
    expect(location.path()).toBe('/generos');
    expect(link.classList).toContain('active');
  });
});