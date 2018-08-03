import { Component, Input, OnInit } from '@angular/core';
import { TimeService } from '../../services/time.service';
import { Time } from '../../model/time';
import {FullDataService} from "../../services/full-data.service";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() public dateStart: Date;
  @Input() public dateEnd: Date;

  public time: Time;

  constructor(
    private _timeService: TimeService) { }

  ngOnInit() {
    this._timeService.countDownTimer(+this.dateStart - +this.dateEnd)
      .subscribe((milliseconds: number) => {
        this.time = this._timeService.calculateTime(milliseconds)
      });
  }
}
