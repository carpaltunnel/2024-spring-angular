import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { WidgetService } from '../widget.service';
import { Widget } from '../widget';

@Component({
  selector: 'app-widgets-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './widgets-create.component.html',
  styleUrl: './widgets-create.component.css'
})
export class WidgetsCreateComponent {
  widget = {} as Widget;
  constructor(private widgetService: WidgetService,
    private router: Router) {}

  createWidget = (): void => {
    this.widgetService.createWidget(this.widget)
      .subscribe((res) => {
        this.router.navigate(['/widgets']);
      });
  }
}
