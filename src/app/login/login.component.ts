import { Component } from '@angular/core';
import { LoginService } from '../Services/Login.Service';
import { LoggedInUserModel } from '../Models/LoggedInUser.Model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginModel:LoggedInUserModel;
    loggedInModel:LoggedInUserModel
    constructor(private loginService:LoginService) {
      this.loginModel=new LoggedInUserModel();
      this.loggedInModel=new LoggedInUserModel();
    }
    Loginnow(){
        console.log(this.loginModel);
        this.loginService.createLogin(this.loginModel).subscribe(data=>{
          this.loggedInModel=data as LoggedInUserModel;
          console.log(this.loggedInModel);
          localStorage.setItem("token",this.loggedInModel.token);
          localStorage.setItem("role",this.loggedInModel.role);
          var userid=this.loggedInModel.userId.toString();
          localStorage.setItem("id",userid);
        },
        err=>{
          console.log(err);
        });
    }
    cancel(){
        this.loginModel.userId=0;
        this.loginModel.password="";
    }
}
