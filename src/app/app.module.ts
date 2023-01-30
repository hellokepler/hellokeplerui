import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MaterialmoduleModule } from '../materialmodule/materialmodule.module';
import { TimeentryComponent } from './timeentry/timeentry.component';
import { DatePipe } from '@angular/common';
import { TimesheetentryComponent } from './timesheetentry/timesheetentry.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TimesheetComponent,
    TimeentryComponent,
    TimesheetentryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,    
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialmoduleModule
    
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
