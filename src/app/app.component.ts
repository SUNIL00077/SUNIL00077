import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sunill';
  msg:any;
  // data=10;
  data:any;
  dataa:any;
  sun:any;
  studentdata:any;
  object={
    name:"sunil",
    age:24,
    city:"Pune"
  }

  updatechild(){
    this.data=Math.random()
  }
}
