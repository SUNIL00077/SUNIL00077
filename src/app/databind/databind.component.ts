import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent {
  dissablle=true;
  disable=false;
  disaabledd=false;
  namme="sunill";
  twoway:any;
  twowayy:any;
name:any;

please(){
  alert('pease help me')
}
login(){
  console.log("you are logged in successfully")
}
ngOnInit():void{
}
}
