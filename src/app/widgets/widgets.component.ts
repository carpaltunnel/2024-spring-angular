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
    this.widgetService.getWidgets().subscribe((widgets) => {
      this.widgets = widgets;
    });
  };

  deleteWidget = (id: string): void => {
    this.widgetService.deleteWidget(id).subscribe((res) => {
      this.getWidgets();
    });
  }

  ngOnInit(): void {
    console.log('Invoked ngOnInit');
    this.getWidgets();
  };
}
