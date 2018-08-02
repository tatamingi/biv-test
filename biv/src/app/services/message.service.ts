import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public _message: string;

  public get message() {
    return this._message;
  }

  public set(message: string) {
    this._message = message;
  }

  public clear() {
    this._message = '';
  }
}
