import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Step } from '../../model/step';


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit, AfterViewInit {
  public steps = [
    {
      name: 'step1',
      isValid: false,
      isSelected: true
    },
    {
      name: 'step2',
      isValid: false,
      isSelected: false
    },
    {
      name: 'step3',
      isValid: false,
      isSelected: false
    },
    {
      name: 'step4',
      isValid: false,
      isSelected: false
    }
  ];

  constructor(
    private _router: Router
  ) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    debugger
  }

  public setSelection = (step: Step): void => {
    this.steps.forEach((step) => { step.isSelected = false })
    step.isSelected = true;
  }

  public getCurrentUrl = (): string => this._router.url;
}
