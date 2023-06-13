import { Component } from '@angular/core';
import { SolutionModel } from '../Models/Solution.Model';
import { AdminService } from '../Services/Admin.Service';

@Component({
  selector: 'app-add-solution',
  templateUrl: './add-solution.component.html',
  styleUrls: ['./add-solution.component.css']
})
export class AddSolutionComponent {
 solution:SolutionModel;
 solutiongiven:SolutionModel;
 constructor(private adminService:AdminService) {
  this.solution=new SolutionModel();
  this.solutiongiven=new SolutionModel();
  this.solution.adminId=Number(localStorage.getItem("id"));
 }
 raiseSolution(){
   console.log(this.solution);
   this.adminService.RaiseTicket(this.solution).subscribe(data=>{
    this.solutiongiven=data as SolutionModel;
    console.log(this.solutiongiven);
    alert("Solution Added sucessfully");
   },
   err=>{
    console.log(err)
   });
 }
}
