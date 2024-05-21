import { Injectable } from '@angular/core';
import { Widget } from './widget';
import { WIDGETS } from './mock-widgets';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  private widgetsUrl = '/api/v1/widgets';

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    ) { }

  getWidgets = (): Observable<Widget[]> => {
    this.messageService.add('About to fetch data from API');
    return this.http.get<Widget[]>(this.widgetsUrl);
  }

  getWidget = (id: string): Observable<Widget> => {
    this.messageService.add(`Fetched data for ID ${id} from API`);
    return this.http.get<Widget>(`${this.widgetsUrl}/${id}`);
  }

  deleteWidget = (id: string): Observable<Object> => {
    return this.http.delete(`${this.widgetsUrl}/${id}`);
  }

  updateWidget = (id: string, widget: Widget): Observable<Widget> => {
    return this.http.put<Widget>(`${this.widgetsUrl}/${id}`, widget);
  }

  createWidget = (widget: Widget): Observable<Widget> => {
    return this.http.post<Widget>(`${this.widgetsUrl}`, widget)
  }
}
