import { Injectable } from '@angular/core';
import { Widget } from './widget';
import { WIDGETS } from './mock-widgets';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  constructor() { }

  getWidgets(): Observable<Widget[]> {
    const widgets = of(WIDGETS);
    return widgets;
  }
}
