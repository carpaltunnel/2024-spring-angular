import { Injectable } from '@angular/core';
import { Widget } from './widget';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  private widgetsUrl = '/api/v1/widgets';

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    private authService: AuthService,
    ) { }

  getWidgets = (): Observable<Widget[]> => {
    this.messageService.add('About to fetch data from API');
    return this.http.get<Widget[]>(this.widgetsUrl, {
      headers: {
        Authorization: this.authService.getToken(),
      }
    });
  }

  getWidget = (id: string): Observable<Widget> => {
    this.messageService.add(`Fetched data for ID ${id} from API`);
    return this.http.get<Widget>(`${this.widgetsUrl}/${id}`,  {
      headers: {
        Authorization: this.authService.getToken(),
      }
    });
  }

  deleteWidget = (id: string): Observable<Object> => {
    return this.http.delete(`${this.widgetsUrl}/${id}`, {
      headers: {
        Authorization: this.authService.getToken(),
      }
    });
  }

  updateWidget = (id: string, widget: Widget): Observable<Widget> => {
    return this.http.put<Widget>(`${this.widgetsUrl}/${id}`, widget,  {
      headers: {
        Authorization: this.authService.getToken(),
      }
    });
  }

  createWidget = (widget: Widget): Observable<Widget> => {
    return this.http.post<Widget>(`${this.widgetsUrl}`, widget,  {
      headers: {
        Authorization: this.authService.getToken(),
      }
    });
  }
}
