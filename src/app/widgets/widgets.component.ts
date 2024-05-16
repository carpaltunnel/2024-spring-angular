import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { MessageService } from '../message.service';
import { Widget } from '../widget';
import { WidgetDetailComponent } from '../widget-detail/widget-detail.component';
import { WidgetService } from '../widget.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor, NgIf, WidgetDetailComponent, RouterLink],  
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.css'
})
export class WidgetsComponent {
  selectedWidget!: Widget;
  widgets: Widget[] = [];

  constructor(private widgetService: WidgetService, private messageService: MessageService) {}

  getWidgets = (): void => {
    console.log('Invoked getWidgets()');
    this.widgetService.getWidgets().subscribe((widgets) => {
      this.widgets = widgets;
    });
  };

  select = (widget: Widget): void => {
    this.messageService.add(`Selected Widget ID : ${widget.id}`);
    this.selectedWidget = widget;
  };

  ngOnInit(): void {
    console.log('Invoked ngOnInit');
    this.getWidgets();
  };
}
