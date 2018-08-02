import { Component, OnInit } from '@angular/core';
import {FullDataService} from "../../services/full-data.service";

@Component({
  selector: 'app-registration-data',
  templateUrl: './registration-data.component.html',
  styleUrls: ['./registration-data.component.css']
})
export class RegistrationDataComponent implements OnInit {

  constructor(
    private _fullDataService: FullDataService
  ) { }

  ngOnInit() {
    this._fullDataService.currentProperty = 'regData';
  }

}
