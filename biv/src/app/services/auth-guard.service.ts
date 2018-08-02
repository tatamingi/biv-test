import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import {FullDataService} from "./full-data.service";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private _fullDataService: FullDataService,
    private _messageService: MessageService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    debugger
    const isProperty = !this._fullDataService.isPropEmpty(this._fullDataService.currentProperty);
    if (isProperty) {
      return true;
    } else {
      this._messageService.set('Укажите Ваш мобильный телефон'); //ToDo: исправить сообщение ошибки
      return false;
    }
  }
}
