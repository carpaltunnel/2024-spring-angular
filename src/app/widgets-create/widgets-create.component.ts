import { of, catchError, map, tap, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { WidgetService } from '../widget.service';
import { Widget } from '../widget';

@Component({
  selector: 'app-widgets-create',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './widgets-create.component.html',
  styleUrl: './widgets-create.component.css'
})
export class WidgetsCreateComponent {
  widget = {} as Widget;
  error?: string;

  constructor(private widgetService: WidgetService,
    private router: Router) {}

  createWidget = (): void => {
    this.widgetService.createWidget(this.widget)
      .pipe(catchError(this.handleError))
      .subscribe((res) => {
        if (!this.error) {
          this.router.navigate(['/widgets']);
        }
      });
  }

  handleError = (err: any): Observable<any> => {
    console.error(err);
    const errorObject = err.error.error[0];
    this.error = `Property "${errorObject.instancePath.slice(1)}" is invalid.  It ${errorObject.message}.  ${errorObject?.params?.allowedValues ? errorObject?.params?.allowedValues.join(', ') : ''}`;
    return of({})
  }
}
