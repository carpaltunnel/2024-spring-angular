import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WidgetsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'This Awesome Angular Project';
  welcomeMessage = '... isn\'t this cool?';
}
