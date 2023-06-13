import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { AddSolutionComponent } from './add-solution/add-solution.component';
import { GetTicketComponent } from './get-ticket/get-ticket.component';
import { ChangeStatusComponent } from './change-status/change-status.component';
import { GetAllTicketsComponent } from './get-all-tickets/get-all-tickets.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminComponent } from './admin/admin.component';
import { InternUserComponent } from './intern-user/intern-user.component';
import { SolutionByTicketComponent } from './solution-by-ticket/solution-by-ticket.component';
import { GetLogsComponent } from './get-logs/get-logs.component';

const routes: Routes = [
  {path : "register",component:RegisterComponent},
  {path : "login", component:LoginComponent},
  {path : "getusers", component:GetUsersComponent},
  {path:"raiseTicket",component:RaiseTicketComponent},
  {path:"AddSolution",component:AddSolutionComponent},
  {path:"getTicket",component:GetTicketComponent},
  {path:"changeStatus",component:ChangeStatusComponent},
  {path:"getAllTickets",component:GetAllTicketsComponent},
  {path:"logOut",component:LogOutComponent},
  {path:"changePassword",component:ChangePasswordComponent},
  {path:"Admin",component:AdminComponent},
  {path:"Intern",component:InternUserComponent},
  {path:"SolutionByTicket",component:SolutionByTicketComponent},
  {path:"getLogs",component:GetLogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
