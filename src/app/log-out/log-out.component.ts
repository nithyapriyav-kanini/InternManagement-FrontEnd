import { Component } from '@angular/core';
import { LogModel } from '../Models/Log.Model';
import { LoginService } from '../Services/Login.Service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent {
 log:LogModel;
 constructor(private loginService:LoginService,private router:Router) {
   this.log= new LogModel();
    var userId=localStorage.getItem("id");
    var logId=localStorage.getItem("logId");
    this.log.userId=Number(userId);
    this.log.id=Number(logId);
    this.loginService.LogOutTime(this.log).subscribe(data=>{
      this.log=data as LogModel;
      console.log(this.log);
      localStorage.clear();
      this.router.navigateByUrl("login");
    },
    err=>{
      console.log(err);
    })
 }
}
