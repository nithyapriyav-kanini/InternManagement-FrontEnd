import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { InternRegisterService } from './Services/InternRegister.Service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './Services/Login.Service';
import { GetUsersComponent } from './get-users/get-users.component';
import { InternComponent } from './intern/intern.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { AddSolutionComponent } from './add-solution/add-solution.component';
import { GetTicketComponent } from './get-ticket/get-ticket.component';
import { ChangeStatusComponent } from './change-status/change-status.component';
import { InternService } from './Services/Intern.Service';
import { AdminService } from './Services/Admin.Service';
import { GetAllTicketsComponent } from './get-all-tickets/get-all-tickets.component';
import { LogOutComponent } from './log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    GetUsersComponent,
    InternComponent,
    RaiseTicketComponent,
    AddSolutionComponent,
    GetTicketComponent,
    ChangeStatusComponent,
    GetAllTicketsComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [InternRegisterService,LoginService,InternService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
