import { Component } from '@angular/core';
import { LoginService } from '../Services/Login.Service';
import { LoggedInUserModel } from '../Models/LoggedInUser.Model';
import { LogModel } from '../Models/Log.Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginModel:LoggedInUserModel;
    loggedInModel:LoggedInUserModel;
    InTime:LogModel;
    constructor(private loginService:LoginService,private router:Router) {
      this.loginModel=new LoggedInUserModel();
      this.loggedInModel=new LoggedInUserModel();
      this.InTime=new LogModel();
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
          this.LogInTime();
        },
        err=>{
          console.log(err);
        });
    }
    move(){
        this.router.navigateByUrl('register');
    }
    LogInTime(){
        this.InTime.userId=this.loggedInModel.userId;
        this.loginService.LogInTime(this.InTime).subscribe(data=>{
          this.InTime=data as LogModel;
          console.log(this.InTime);
          localStorage.setItem("logId",this.InTime.id.toString())
        },
        err=>{
          console.log(err);
        });
    }
}
