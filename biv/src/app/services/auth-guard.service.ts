import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { FullDataService } from './full-data.service';
import { MessageService } from './message.service';
import * as _ from 'lodash';

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
    const errorFields = this._fullDataService.getEmptyProperties();
    if (_.isEmpty(errorFields)) {
      return true;
    } else {
      this._messageService.set(errorFields); //ToDo: исправить сообщение ошибки
      return false;
    }
  }
}
