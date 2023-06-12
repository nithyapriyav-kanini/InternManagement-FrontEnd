import { Component } from '@angular/core';
import { InternModel } from '../Models/Intern.Model';
import { AdminService } from '../Services/Admin.Service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent {
    interns:InternModel[];
    constructor(private adminService:AdminService) {
      this.adminService.getAllUsers().subscribe(data=>{
        this.interns=data as InternModel[];
        console.log(this.interns);
      },
      err=>{
        console.log(err);
      });
    }
}
