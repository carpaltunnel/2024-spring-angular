import { Component } from '@angular/core';
import { Widget } from '../widget';
import { NgFor, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WIDGETS } from '../mock-widgets';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.css'
})
export class WidgetsComponent {
  widget: Widget = {
    id: '3f94541b-2ac1-4497-be1c-b3b86facc9d3',
    name: 'Widget #1',
    color: 'blue',
    weight: 10,
  };

  widgets = WIDGETS;
}
