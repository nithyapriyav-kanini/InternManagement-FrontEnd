import { Component } from '@angular/core';
import { InternModel } from '../Models/Intern.Model';
import { LoggedInUserModel } from '../Models/LoggedInUser.Model';
import { InternRegisterService } from '../Services/InternRegister.Service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  intern:InternModel
  loggedInUser:LoggedInUserModel
  constructor(private internRegisterService:InternRegisterService){
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
  },
  err=>{
    console.log(err)
   });
}
}
