import { Component } from '@angular/core';
import { TicketModel } from '../Models/Ticket.Model';
import { InternService } from '../Services/Intern.Service';
import { SolutionModel } from '../Models/Solution.Model';

@Component({
  selector: 'app-solution-by-ticket',
  templateUrl: './solution-by-ticket.component.html',
  styleUrls: ['./solution-by-ticket.component.css']
})
export class SolutionByTicketComponent {
 ticket:TicketModel;
 solutions:SolutionModel[];
 _object = Object;
 check:Boolean=false;
 constructor(private internService:InternService){
  this.ticket=new TicketModel();
 }
 GetSolutions(){
    this.internService.GetSolutions(this.ticket).subscribe(data=>{
      this.solutions=data as SolutionModel[];
      console.log(this.solutions);
      this.check=true;
    },
    err=>{
      console.log(err);
    });
 }
}
