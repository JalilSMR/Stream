import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

interface LoginResponse {
  token: string;
  expiresAt: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = `${environment.apiBase}/auth`;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<void> {
    return this.http
      .post<LoginResponse>(`${this.base}/login`, { username, password })
      .pipe(
        tap(res => localStorage.setItem('jwt_token', res.token)),
        map(() => {})
      );
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
  }

  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  isLogged(): boolean {
    return !!this.getToken();
  }
}
