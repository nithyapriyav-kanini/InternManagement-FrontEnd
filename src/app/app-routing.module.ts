import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { AddSolutionComponent } from './add-solution/add-solution.component';
import { GetTicketComponent } from './get-ticket/get-ticket.component';
import { ChangeStatusComponent } from './change-status/change-status.component';

const routes: Routes = [
  {path : "register",component:RegisterComponent},
  {path : "login", component:LoginComponent},
  {path : "getusers", component:GetUsersComponent},
  {path:"raiseTicket",component:RaiseTicketComponent},
  {path:"AddSolution",component:AddSolutionComponent},
  {path:"getTicket",component:GetTicketComponent},
  {path:"changeStatus",component:ChangeStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
