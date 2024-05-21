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
  widgets: Widget[] = [];

  currentPageWidgets: Widget[] = [];
  currentPage = 0;
  pageSize = 5;
  pageCount = 0;

  constructor(private widgetService: WidgetService, private messageService: MessageService) {}

  getWidgets = (): void => {
    this.widgetService.getWidgets().subscribe((widgets) => {
      this.widgets = widgets;
      this.pageCount = Math.ceil(this.widgets.length / this.pageSize);
      this.currentPageWidgets = this.widgets.slice(0, this.pageSize);
    });
  };

  previousPage = (): void => {
    if (this.currentPage - 1 < 0) {
      return;
    }
    this.currentPage -= 1;
    const startIndex = this.currentPage * this.pageSize;
    this.currentPageWidgets = this.widgets.slice(startIndex, startIndex + this.pageSize);
  };

  nextPage = (): void => {
    if (this.currentPage + 1 >= this.pageCount) {
      return;
    }
    this.currentPage += 1;
    const startIndex = this.currentPage * this.pageSize;
    this.currentPageWidgets = this.widgets.slice(startIndex, startIndex + this.pageSize);
    console.log('test');
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
