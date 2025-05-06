import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';
import { fakeAsync, tick } from '@angular/core/testing';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear', () => {
    expect(component).toBeTruthy();
  });

  it('Debe renderizar los enlaces del pie de página después de la carga asíncrona', fakeAsync(() => {
    tick(300); // espera el delay simulado
    fixture.detectChanges();

    const links = fixture.debugElement.queryAll(By.css('a'));
    expect(links.length).toBe(2);
    expect(links[0].nativeElement.textContent).toContain('Términos y condiciones');
    expect(links[1].nativeElement.textContent).toContain('Política de privacidad');
  }));
});
