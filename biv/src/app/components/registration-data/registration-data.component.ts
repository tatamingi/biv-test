import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FullDataService } from '../../services/full-data.service';
import * as _ from 'lodash'
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-registration-data',
  templateUrl: './registration-data.component.html',
  styleUrls: ['./registration-data.component.scss']
})
export class RegistrationDataComponent implements OnInit {
  public email: FormControl;
  public password: FormControl;

  constructor(
    public messageService: MessageService,
    public fullDataService: FullDataService
  ) { }

  ngOnInit() {
    this.email = new FormControl(this.fullDataService.getPropValue('email'), Validators.email);
    this.password = new FormControl(this.fullDataService.getPropValue('password'), Validators.min(3));
    this.fullDataService.setPropValue(this.email, 'email');
    this.fullDataService.setPropValue(this.password, 'password');
  }

}
