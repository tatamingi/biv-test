import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Time } from '../model/time';
import { Observable, timer } from "rxjs/index";
import { map } from "rxjs/internal/operators";


@Injectable({
  providedIn: 'root'
})
export class TimeService {
  constructor() { }

  public getDate = (time?: Time): Date => {
    let date = new Date();
    if (_.isNil(time)) { return date }
    date.setDate(date.getDate() + time.days);
    date.setHours(date.getHours() + time.hours);
    date.setMinutes(date.getMinutes() + time.minutes);
    date.setSeconds(date.getSeconds() + time.seconds);
    return date;
  }

  public countDownTimer = (start: number): Observable<number> =>
    timer(0, 1000)
      .pipe(map(i => start - i * 1000));

  public calculateTime = (milliseconds: number): Time => {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    return new Time(days, hours, minutes, seconds);
  }
}
