import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeavesComponent } from './leaves/leaves.component';
import { Page404Component } from './page404/page404.component';
import { ProfileComponent } from './profile/profile.component';
import { ApplyComponent } from './leaves/apply/apply.component';
import { BalanceComponent } from './leaves/balance/balance.component';
import { CasualComponent } from './leaves/balance/casual/casual.component';
import { EarnedComponent } from './leaves/balance/earned/earned.component';
import { Page404balanceComponent } from './leaves/balance/page404balance/page404balance.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    DashboardComponent,
    LeavesComponent,
    Page404Component,
    ProfileComponent,
    ApplyComponent,
    BalanceComponent,
    CasualComponent,
    EarnedComponent,
    Page404balanceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
