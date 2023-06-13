import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router:Router) {
    
  }
  moveToUsers(){
      this.router.navigateByUrl('getusers');
  }
  MoveToTickets(){
    this.router.navigateByUrl('getAllTickets');
  }
  MoveToSolution(){
    this.router.navigateByUrl('AddSolution');
  }
  ApproveInterns(){
    this.router.navigateByUrl('changeStatus');
  }
  GetLogs(){
    this.router.navigateByUrl('getLogs');
  }
  ChangePassword(){
    this.router.navigateByUrl('changePassword');
  }
}
