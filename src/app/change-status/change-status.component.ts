import { Component } from '@angular/core';
import { UserModel } from '../Models/User.Model';
import { AdminService } from '../Services/Admin.Service';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.css']
})
export class ChangeStatusComponent {
 user:UserModel;
 approvedUser:UserModel;
 constructor(private adminservice:AdminService) {
  this.user=new UserModel();
  this.approvedUser=new UserModel();
 }
 changeStatus(){
    this.adminservice.approveIntern(this.user).subscribe(data=>{
      this.approvedUser=data as UserModel;
      console.log(this.approvedUser);
    },
    err=>{
      console.log(err);
    });
 }
}
