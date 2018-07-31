import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhoneComponent } from './components/phone/phone.component';
import { RegistrationDataComponent } from './components/registration-data/registration-data.component';
import { DateComponent } from './components/date/date.component';
import { FullDataComponent } from './components/full-data/full-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/step1', pathMatch: 'full' },
  { path: 'step1', component: PhoneComponent },
  { path: 'step2', component: RegistrationDataComponent },
  { path: 'step3', component: DateComponent },
  { path: 'step4', component: FullDataComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
