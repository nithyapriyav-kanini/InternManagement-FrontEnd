import { Component } from '@angular/core';
import { LoggedInUserModel } from '../Models/LoggedInUser.Model';
import { LoginService } from '../Services/Login.Service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  password:LoggedInUserModel;
  constructor(private loginService:LoginService) {
      this.password=new LoggedInUserModel();
      this.password.userId=Number(localStorage.getItem("id"));
  }
  changePassword(){
    this.loginService.ChangePassword(this.password).subscribe(data=>{
      this.password=data as LoggedInUserModel;
      console.log(this.password);
      alert("password changed successfully");
    },
    err=>{
      console.log(err);
    });
  }
}
