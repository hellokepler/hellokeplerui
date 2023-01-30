import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimesheetentryComponent } from './timesheetentry/timesheetentry.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'timesheet', component:TimesheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
