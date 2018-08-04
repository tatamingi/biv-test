import { Component, OnInit } from '@angular/core';
import { FullDataService } from "../../services/full-data.service";
import { FullData } from '../../model/full-data';

@Component({
  selector: 'app-full-data',
  templateUrl: './full-data.component.html',
  styleUrls: ['./full-data.component.scss']
})
export class FullDataComponent implements OnInit {
  public fields: FullData;

  constructor(private _fullDataService: FullDataService) { }

  ngOnInit() {
    this.fields = this._fullDataService.fullData as FullData;
  }

}
