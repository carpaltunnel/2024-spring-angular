import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenName: string = 'arcaToken';
  authUrl: string = '/api/v1/auth';
  constructor(private http: HttpClient) { }

  login = (username: string, password: string) => {
    return this.http.post<any>(`${this.authUrl}`, {
      username,
      password, // NOTE: Do not transfer passwords in cleartext / http only
    });
  };

  storeToken = (token: string): void => {
    localStorage.setItem(this.tokenName, token);
  };

  getToken = (): string => {
    console.log(`getToken = ${localStorage.getItem(this.tokenName) || ''}`)
    return localStorage.getItem(this.tokenName) || '';
  };

  getTokenObject = (): any => {
    const token = localStorage.getItem(this.tokenName);

    if (token) {
      return jwtDecode(token);
    }
  };

  hasRole = (role: string): boolean => {
    return this.getTokenObject()?.roles?.includes(role);
  }

  logout = (): void => {
    localStorage.removeItem(this.tokenName);
  }
}
