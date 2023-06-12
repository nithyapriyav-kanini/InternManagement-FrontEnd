import { Component } from '@angular/core';
import { TicketModel } from '../Models/Ticket.Model';
import { AdminService } from '../Services/Admin.Service';

@Component({
  selector: 'app-get-all-tickets',
  templateUrl: './get-all-tickets.component.html',
  styleUrls: ['./get-all-tickets.component.css']
})
export class GetAllTicketsComponent {
tickets:TicketModel[];
_object = Object;
constructor(private adminService:AdminService) {
    this.adminService.getAllTickets().subscribe(data=>{
      this.tickets=data as TicketModel[];
      console.log(this.tickets);
    },
    err=>{
      console.log(err);
    });
}
}
