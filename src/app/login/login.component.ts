import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  result: string = '';
  resultColor: string = 'green';

  constructor(private authService: AuthService, private router: Router) {};

  doLogin = (): void => {
    this.authService.login(this.username, this.password).subscribe((token) => {
      if (token) {
        this.result = 'Success!';
        this.authService.storeToken(token.token);
        this.router.navigate(['/widgets']);
      } 
    },
    () => {
      this.resultColor = 'red';
      this.result = 'Invalid username or password!';
    });
  };

}
