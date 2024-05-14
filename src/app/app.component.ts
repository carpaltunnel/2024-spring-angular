import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WidgetsComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'This Awesome Angular Project';
  welcomeMessage = '... isn\'t this cool?';
}
