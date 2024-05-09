import { Component } from '@angular/core';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.css'
})
export class WidgetsComponent {
  widgetName = 'Widget #1';
}
