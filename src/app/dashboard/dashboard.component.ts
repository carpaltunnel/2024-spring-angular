import { Component } from '@angular/core';
import { Widget } from '../widget';
import { WidgetService } from '../widget.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  widgets: Widget[] = [];

  constructor(private widgetsService: WidgetService) {}

  getTop5WidgetsByWeight = (): void => {
    this.widgetsService.getWidgets().subscribe((widgets) => {
      // TODO: Only return top 5 from API
      this.widgets = widgets.slice(0, 5);
    });
  }

  // TODO: Research as arrow function
  ngOnInit(): void {
    this.getTop5WidgetsByWeight();
  }
}
