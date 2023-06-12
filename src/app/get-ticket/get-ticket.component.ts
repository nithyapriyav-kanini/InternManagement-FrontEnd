import { Component } from '@angular/core';
import { TicketModel } from '../Models/Ticket.Model';
import { InternService } from '../Services/Intern.Service';

@Component({
  selector: 'app-get-ticket',
  templateUrl: './get-ticket.component.html',
  styleUrls: ['./get-ticket.component.css']
})
export class GetTicketComponent {
ticket:TicketModel;
tick:TicketModel;
constructor(private internService:InternService) {
  this.ticket=new TicketModel();
  this.tick=new TicketModel();
}
GetTicket(){
  console.log(this.tick.id);
  this.internService.GetTicket(this.tick).subscribe(data=>{
    this.ticket=data as TicketModel;
    console.log(this.ticket);
  },
  err=>{
    console.log(err);
  });
}
}
