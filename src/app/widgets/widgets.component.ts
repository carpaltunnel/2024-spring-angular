import { Component } from '@angular/core';
import { Widget } from '../widget';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WidgetDetailComponent } from '../widget-detail/widget-detail.component';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf, WidgetDetailComponent],  
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.css'
})
export class WidgetsComponent {
  selectedWidget!: Widget;
  widgets: Widget[] = [];

  constructor(private widgetService: WidgetService) {}

  getWidgets = (): void => {
    console.log('Invoked getWidgets()');
    this.widgetService.getWidgets().subscribe((widgets) => {
      this.widgets = widgets;
    });
  };

  select = (widget: Widget): void => {
    this.selectedWidget = widget;
  };

  ngOnInit(): void {
    console.log('Invoked ngOnInit');
    this.getWidgets();
  };
}
