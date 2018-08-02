import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FullDataService } from '../../services/full-data.service';
import * as _ from 'lodash'
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  public phone = new FormControl('', Validators.pattern("[0-9/+]{10,12}"));

  constructor(
    private _fullDataService: FullDataService,
    private _messageService: MessageService
  ) { }

  ngOnInit() {
    this._fullDataService.currentProperty = 'phone';
    debugger
    this.phone.setValue(this._fullDataService.currentPropValue);
  }

  public setData = (): void => {
    _.isNull(this.phone.errors)
      ? this._fullDataService.setCurrentValue(this.phone.value)
      : this._fullDataService.setCurrentValue('')
  }

  public clearMessage = () => {
    this._messageService.clear();
  }
}
