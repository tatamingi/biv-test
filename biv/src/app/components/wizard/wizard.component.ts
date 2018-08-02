import { Component, OnInit } from '@angular/core';
import { Step } from '../../model/step';
import {FullDataService} from "../../services/full-data.service";


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {
  public steps = [
    {
      name: 'step1',
      isValid: false
    },
    {
      name: 'step2',
      isValid: false,
    },
    {
      name: 'step3',
      isValid: false
    },
    {
      name: 'step4',
      isValid: false
    }
  ];



  constructor(
    private _fullDataService: FullDataService
  ) {
  }

  public isPropValid = (prop: string): boolean => !this._fullDataService.isPropEmpty(prop);
}
