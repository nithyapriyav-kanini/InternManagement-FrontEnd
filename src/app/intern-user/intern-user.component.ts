import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intern-user',
  templateUrl: './intern-user.component.html',
  styleUrls: ['./intern-user.component.css']
})
export class InternUserComponent {
  constructor(private router:Router) {
    
  }
  RaiseTicket(){
      this.router.navigateByUrl('raiseTicket');
  }
  GetTicket(){
    this.router.navigateByUrl('getTicket');
  }
  GetSolutionByTicket(){
    this.router.navigateByUrl('SolutionByTicket');
  }
  ChangePassword(){
    this.router.navigateByUrl('changePassword');
  }
}
