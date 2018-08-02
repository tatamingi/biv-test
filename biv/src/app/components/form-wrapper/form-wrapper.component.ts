import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FullDataService } from "../../services/full-data.service";
import {MessageService} from "../../services/message.service";


@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss']
})
export class FormWrapperComponent implements OnInit {

  constructor(
    private _router: Router,
    private _location: Location,
    private _fullDataService: FullDataService,
    private _messageService: MessageService
  ) {
  }

  ngOnInit() {
  }

  public goBack = (): void => {
    this._location.back()
  }

  public goForward = (): void => {
    this._location.forward();
  }

}
