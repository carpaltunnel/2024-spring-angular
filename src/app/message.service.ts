import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add = (message: string): void => {
    this.messages.push(`${new Date().toISOString()} : ${message}`);
  }

  clear = ():void => {
    this.messages = [];
  }
}