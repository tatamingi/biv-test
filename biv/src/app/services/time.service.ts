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
    let dateStart = new Date();
    if (_.isNil(time)) { return dateStart }

    dateStart.setDate(dateStart.getDate() + time.days);
    dateStart.setHours(dateStart.getHours() + time.hours);
    dateStart.setMinutes(dateStart.getMinutes() + time.minutes);
    dateStart.setSeconds(dateStart.getSeconds() + time.seconds);
    return dateStart;
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
