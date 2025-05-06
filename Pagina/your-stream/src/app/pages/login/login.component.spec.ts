import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { LoginService } from '../../core/services/login.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLoginService: jasmine.SpyObj<LoginService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockLoginService = jasmine.createSpyObj('LoginService', ['login']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        { provide: LoginService, useValue: mockLoginService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería activar loading y navegar al hacer login', fakeAsync(() => {
    mockLoginService.login.and.returnValue(of(true).pipe(delay(1000)));

    component.onLogin();
    expect(component.loading).toBeTrue(); // loading debe estar activo

    tick(1000); // Simula que pasa el tiempo

    expect(component.loading).toBeFalse();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
  }));
});
