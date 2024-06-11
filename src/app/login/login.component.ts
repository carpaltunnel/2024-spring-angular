import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {};

  doLogin = (): void => {
    this.authService.login(this.username, this.password).subscribe((token) => {
      // TODO: Store token in localStorage
      console.log(token);
    });
  }
}
