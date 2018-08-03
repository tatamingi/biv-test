import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { FormWrapperComponent } from './components/form-wrapper/form-wrapper.component';
import { AppRoutingModule } from './/app-routing.module';
import { PhoneComponent } from './components/phone/phone.component';
import { DateComponent } from './components/date/date.component';
import { RegistrationDataComponent } from './components/registration-data/registration-data.component';
import { FullDataComponent } from './components/full-data/full-data.component';
import { MessageComponent } from './components/message/message.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HttpClientModule } from '@angular/common/http';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    FormWrapperComponent,
    PhoneComponent,
    DateComponent,
    RegistrationDataComponent,
    FullDataComponent,
    MessageComponent,
    DropdownComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
