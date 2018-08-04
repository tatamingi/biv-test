import { Component } from '@angular/core';


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {
  public steps = ['step1', 'step2', 'step3', 'step4'];
}
