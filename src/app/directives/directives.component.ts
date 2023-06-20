import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
sunil=false;
display="white"
choose="";
value=true;
name="";

setvalue(drp:any){
   this.choose=drp.target.value;
 }

selectvalue(sun:any){
  this.name=sun.target.value
}

btnclick(){
  alert('You clicked me')
}

fruits=["apple","mango","banana","grapes","pomogranate"]

persons=[
  {name:"sunil",age:24,ismarried:false,hobbies:["writting","reading","swimming"]},
  {name:"santosh",age:22,ismarried:false,hobbies:["writting","reading","swimming"]},
  {name:"Ajit",age:27,ismarried:true,hobbies:["writting","reading","swimming"]}
]
}
