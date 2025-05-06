import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoginService {
  login(email: string, password: string) {
    // Simulación de autenticación asincrónica
    return of(true).pipe(delay(1000));
  }
}
