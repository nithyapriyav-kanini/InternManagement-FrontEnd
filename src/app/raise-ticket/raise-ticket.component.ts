import { Component } from '@angular/core';
import { TicketModel } from '../Models/Ticket.Model';
import { getLocaleDateTimeFormat } from '@angular/common';
import { InternService } from '../Services/Intern.Service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent {
 ticket:TicketModel;
 ticketRaised:TicketModel;
 constructor(private internService:InternService) {
  this.ticket=new TicketModel();
  this.ticketRaised=new TicketModel();
  var id=localStorage.getItem("id");
  this.ticket.internId=Number(id);
 }
 RaiseTicket(){
  console.log(this.ticket);
  this.internService.RaiseTicket(this.ticket).subscribe(data=>{
    this.ticketRaised=data as TicketModel;
    console.log(this.ticketRaised);
    alert("Ticket Raised")
  },
  err=>{
    console.log(err);
    alert("Cannot raise a ticket");
  }
  );
  
 }
}
