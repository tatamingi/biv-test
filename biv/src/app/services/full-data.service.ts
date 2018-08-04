import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FullDataService {
  public fullData = {};

  constructor() { }

  public getPropValue = (propName: string): string =>
    _.isNil(this.fullData[propName]) ? '' : this.fullData[propName]

  public setPropValue = (control: FormControl, propName: string): void => {
    if (this.fullData[propName] === control.value) { return }
    this.fullData[propName] = _.isNull(control.errors) ? control.value : '';
  }

  public isPropEmpty = (prop: string): boolean =>
    _.isEmpty(this.fullData[prop])

  public getEmptyProperties = () =>
    Object.keys(this.fullData).filter((key) => _.isEmpty(this.fullData[key]))

}
