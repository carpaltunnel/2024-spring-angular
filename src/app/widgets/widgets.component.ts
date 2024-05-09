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
  selectedWidget: Widget = {} as Widget;

  widgets = WIDGETS;

  select = (widget: Widget): void => {
    this.selectedWidget = widget;
  }
}
