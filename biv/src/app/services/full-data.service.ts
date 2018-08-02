import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import {strictEqual} from "assert";

@Injectable({
  providedIn: 'root'
})
export class FullDataService {
  public fullData = {};
  private _currentProperty: string;

  constructor() { }

  public set currentProperty(prop: string) {
    this._currentProperty = prop;
  }

  public get currentProperty(): string {
    return this._currentProperty;
  }

  public get currentPropValue(): string {
    return this.fullData[this._currentProperty]
  }

  public setCurrentValue = (value: string): void => {
    if (!_.isNil(this._currentProperty) && this.fullData[this._currentProperty] === value) { return }
    this.fullData[this._currentProperty] = value; // toDo: make json writing
  }

  public isPropEmpty = (prop: string): boolean =>
    _.isEmpty(this.fullData[prop])
}
