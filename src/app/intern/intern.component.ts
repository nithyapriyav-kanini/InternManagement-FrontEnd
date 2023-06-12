import { Component, Input } from '@angular/core';
import { InternModel } from '../Models/Intern.Model';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.css']
})
export class InternComponent {
   @Input() intern:InternModel;
   constructor() {
      this.intern=new InternModel();
   }
}
