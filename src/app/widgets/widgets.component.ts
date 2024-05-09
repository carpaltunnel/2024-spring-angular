import { Component } from '@angular/core';
import { Widget } from '../widget';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WIDGETS } from '../mock-widgets';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.css'
})
export class WidgetsComponent {
  selectedWidget!: Widget;

  widgets = WIDGETS;

  select = (widget: Widget): void => {
    this.selectedWidget = widget;
  }
}
