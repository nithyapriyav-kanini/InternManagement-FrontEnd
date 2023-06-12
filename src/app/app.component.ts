import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InternManagement';
  role:string;
  check:Boolean=false;
  constructor() {
    this.role=localStorage.getItem("role");
    if(this.role=="Admin"){
        this.check=true;
    }
  }
  
}
