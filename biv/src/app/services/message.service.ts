import { Injectable } from '@angular/core';

enum Direction {
  phone = 'Phone',
  email = 'Email',
  password = 'Password',
  country = 'Country'
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public _message: string;

  public get message() {
    return this._message;
  }

  public set(errorFields: string[]) {
    const fields = errorFields.map((field: string) => Direction[field]).join(', ');
    this._message = 'Enter your ' + fields;
  }

  public clear() {
    this._message = '';
  }
}
