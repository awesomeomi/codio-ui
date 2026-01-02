import { Component } from '@angular/core';
import { ApiService } from '../../app/services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  message = '';

  constructor(private apiService: ApiService) {}

  onLogin() {
    console.log('Login button clicked');

    this.apiService.hello().subscribe({
      next: (res) => {
        console.log('API response:', res);
        this.message = res;
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }
}
