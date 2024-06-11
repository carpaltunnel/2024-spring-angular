import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { WidgetsComponent } from './widgets/widgets.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, RouterOutlet, RouterLink, WidgetsComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'This Awesome Angular Project';
  welcomeMessage = '... isn\'t this cool?';

  constructor(public authService: AuthService, private router: Router) {};

  logout = () => {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
