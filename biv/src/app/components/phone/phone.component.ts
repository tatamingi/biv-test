import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FullDataService } from '../../services/full-data.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  public phone: FormControl;

  constructor(
    public messageService: MessageService,
    public fullDataService: FullDataService,
  ) { }

  ngOnInit() {
    this.phone = new FormControl(this.fullDataService.getPropValue('phone'),
      Validators.pattern("[0-9/+]{10,12}"));
    this.fullDataService.setPropValue(this.phone, 'phone');
  }
}
