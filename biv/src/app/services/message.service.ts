import { Injectable } from '@angular/core';

enum Fields {
  phone = 'Phone',
  email = 'Email',
  password = 'Password',
  country = 'Country',
  days = 'Days',
  hours = 'Hours',
  minutes = 'Minutes',
  seconds = 'Seconds'
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
    const fields = errorFields.map((field: string) => Fields[field]).join(', ');
    this._message = 'Enter ' + fields + ' please';
  }

  public clear() {
    this._message = '';
  }
}
