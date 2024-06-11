import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl: string = '/api/v1/auth';
  constructor(private http: HttpClient) { }

  login = (username: string, password: string) => {
    return this.http.post<any>(`${this.authUrl}`, {
      username,
      password, // NOTE: Do not transfer passwords in cleartext / http only
    });
  };
}
