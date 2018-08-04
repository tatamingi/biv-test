import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FullDataService } from '../../services/full-data.service';
import { MessageService } from '../../services/message.service';
import { DataService } from '../../services/data.service';
import { Country } from '../../model/country';

@Component({
  selector: 'app-registration-data',
  templateUrl: './registration-data.component.html',
  styleUrls: ['./registration-data.component.scss']
})
export class RegistrationDataComponent implements OnInit {
  public email: FormControl;
  public password: FormControl;
  public countries: Country[];

  constructor(
    public messageService: MessageService,
    public fullDataService: FullDataService,
    private _dataService: DataService
  ) { }

  ngOnInit() {
   this.initializeControls();
   this.setCountries();
  }

 private initializeControls = (): void => {
    this.email = new FormControl(this.fullDataService.getPropValue('email'), Validators.email);
    this.password = new FormControl(this.fullDataService.getPropValue('password'), Validators.minLength(5));
    this.fullDataService.setPropValue(this.email, 'email');
    this.fullDataService.setPropValue(this.password, 'password');
  }

  private setCountries = (): void => {
    this._dataService.getData()
      .subscribe((data: Country[]) => {
        this.countries = data;
      })
  }
}
