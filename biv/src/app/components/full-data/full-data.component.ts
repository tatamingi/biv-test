import { Component, OnInit } from '@angular/core';
import { FullDataService } from "../../services/full-data.service";
import { TimeService } from '../../services/time.service';
import { FullData } from '../../model/full-data';
import { Time } from '../../model/time';


@Component({
  selector: 'app-full-data',
  templateUrl: './full-data.component.html',
  styleUrls: ['./full-data.component.scss']
})
export class FullDataComponent implements OnInit {
  public fields: FullData;
  public time: Date;

  constructor(
    private _fullDataService: FullDataService,
    private _timeService: TimeService
  ) { }

  ngOnInit() {
    this.fields = this._fullDataService.fullData as FullData;
    this._setDate();
  }

  private _setDate = () => {
    const time = new Time(+this.fields.days, +this.fields.hours, +this.fields.minutes, +this.fields.seconds);
    this.time = this._timeService.getDate(time);
  }
}
