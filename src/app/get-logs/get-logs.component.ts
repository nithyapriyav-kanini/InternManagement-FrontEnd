import { Component } from '@angular/core';
import { LogModel } from '../Models/Log.Model';
import { AdminService } from '../Services/Admin.Service';

@Component({
  selector: 'app-get-logs',
  templateUrl: './get-logs.component.html',
  styleUrls: ['./get-logs.component.css']
})
export class GetLogsComponent {
 logs:LogModel[];
 _object = Object;
 constructor(private adminService:AdminService) {
  this.adminService.getAllLogs().subscribe(data=>{
    this.logs=data as LogModel[];
    console.log(this.logs);
  },
  err=>{
    console.log(err);
  })
 }
}
