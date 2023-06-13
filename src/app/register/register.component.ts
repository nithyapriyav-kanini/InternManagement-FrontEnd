import { Component } from '@angular/core';
import { InternModel } from '../Models/Intern.Model';
import { LoggedInUserModel } from '../Models/LoggedInUser.Model';
import { InternRegisterService } from '../Services/InternRegister.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  intern:InternModel
  loggedInUser:LoggedInUserModel
  constructor(private internRegisterService:InternRegisterService,private router:Router){
    this.intern = new InternModel();
    this.loggedInUser = new LoggedInUserModel();
}
  addGender(gender:any){
    this.intern.gender = gender;
}
  addIntern(){
    console.log(this.intern)
    this.internRegisterService.createIntern(this.intern).subscribe(data=>{
    this.loggedInUser = data as LoggedInUserModel;
    console.log(this.loggedInUser);
    localStorage.setItem("token",this.loggedInUser.token);
    alert(`Register successfull!!\n User Id : ${this.loggedInUser.userId}\n Password : Four letters of name + date + month`);
    this.router.navigateByUrl("login");
  },
  err=>{
    console.log(err)
    alert("Cannot register");
   });
}
}
