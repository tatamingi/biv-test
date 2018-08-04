import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhoneComponent } from './components/phone/phone.component';
import { RegistrationDataComponent } from './components/registration-data/registration-data.component';
import { DateComponent } from './components/date/date.component';
import { FullDataComponent } from './components/full-data/full-data.component';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'step1', component: PhoneComponent },
  { path: 'step2', component: RegistrationDataComponent,canActivate:[AuthGuardService] },
  { path: 'step3', component: DateComponent, canActivate:[AuthGuardService] },
  { path: 'step4', component: FullDataComponent, canActivate:[AuthGuardService] },
  { path: '', redirectTo: '/step1', pathMatch: 'full' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
