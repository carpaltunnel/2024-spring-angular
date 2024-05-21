import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Widget } from '../widget';
import { FormsModule } from '@angular/forms';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'app-widget-detail',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './widget-detail.component.html',
  styleUrl: './widget-detail.component.css'
})
export class WidgetDetailComponent {
  widget?: Widget;

  constructor(
    private route: ActivatedRoute,
    private widgetService: WidgetService
  ) {}

  getWidget = (): void => {
    const widgetId = this.route.snapshot.paramMap.get('id');

    if (widgetId) {
      this.widgetService.getWidget(widgetId)
        .subscribe((widget: Widget) => {
          this.widget = widget;
        });
    }
  }

  updateWidget = (): void => {
    const widgetId = this.route.snapshot.paramMap.get('id');

    if (widgetId && this.widget) {
      this.widgetService.updateWidget(widgetId, this.widget)
        .subscribe((widget: Widget) => {
          this.widget = widget;
        });
    }
    
  }

  ngOnInit(): void {
    this.getWidget();
  }
}
