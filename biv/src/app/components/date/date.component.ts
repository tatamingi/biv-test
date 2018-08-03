import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FullDataService } from "../../services/full-data.service";
import { MessageService } from "../../services/message.service";
import { TimeService } from '../../services/time.service';
import * as _ from 'lodash';
import { Time } from '../../model/time';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  public days: FormControl;
  public hours: FormControl;
  public minutes: FormControl;
  public seconds: FormControl;
  public dateStart: Date;
  public dateEnd: Date;

  public timerEnabled: boolean;

  constructor(
    public messageService: MessageService,
    private _fullDataService: FullDataService,
    private _timeService: TimeService
  ) { }

  ngOnInit() {
    this._initializeControls();
  }

  public handleValue = (control: FormControl, controlName: string): void => {
    this._fullDataService.setPropValue(control, controlName);
    debugger
    this._setTimerVisibility();
    this._setData();
  }

  private _initializeControls = (): void => {
    this.days = new FormControl(this._fullDataService.getPropValue('days'), Validators.pattern("[0-9]{1,10}"));
    this.hours = new FormControl(this._fullDataService.getPropValue('hours'), Validators.pattern("[0-9]{1,10}"));
    this.minutes = new FormControl(this._fullDataService.getPropValue('minutes'), Validators.pattern("[0-9]{1,10}"));
    this.seconds = new FormControl(this._fullDataService.getPropValue('seconds'), Validators.pattern("[0-9]{1,10}"));
    this._fullDataService.setPropValue(this.days, 'days');
    this._fullDataService.setPropValue(this.hours, 'hours');
    this._fullDataService.setPropValue(this.minutes, 'minutes');
    this._fullDataService.setPropValue(this.seconds, 'seconds');
    this._setTimerVisibility();
    if (this.timerEnabled) {
      this._setDate();
    }
  }

  private _setTimerVisibility = (): void => {
    this.timerEnabled = _.isEmpty(this._fullDataService.getEmptyProperties());
  }

  private _setData = (): void => {
    const errorFields = this._fullDataService.getEmptyProperties();
    if (this.timerEnabled) {
      this._setDate();
      return
    }
    this.messageService.set(errorFields);
  }

  private _setDate = (): void => {
    const time = new Time(+this.days.value, +this.hours.value, +this.minutes.value, +this.seconds.value)
    this.dateEnd = this._timeService.getDate();
    this.dateStart = this._timeService.getDate(time);
  }
}
