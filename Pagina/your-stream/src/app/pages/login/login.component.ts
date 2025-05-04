import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../core/services/login.service'; 
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loading = false;

  constructor(private loginService: LoginService, private router: Router) {}

  onLogin(): void {
    this.loading = true;

    this.loginService.login('correo@demo.com', '1234').subscribe(() => {
      this.loading = false;
      this.router.navigate(['/home']);
    });
  }
}
