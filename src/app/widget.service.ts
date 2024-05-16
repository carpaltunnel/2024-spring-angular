import { Injectable } from '@angular/core';
import { Widget } from './widget';
import { WIDGETS } from './mock-widgets';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  constructor(private messageService: MessageService) { }

  getWidgets = (): Observable<Widget[]> => {
    this.messageService.add('About to fetch data from API');
    const widgets = of(WIDGETS);
    this.messageService.add('Done fetching data from API');
    return widgets;
  }

  getWidget = (id: string): Observable<Widget> => {
    const widget = WIDGETS.find(widget => widget.id === id);

    this.messageService.add(`Fetched data for ID ${id} from API`);

    if (widget) {
      return of(widget);
    }

    return of({} as Widget);
  }
}
