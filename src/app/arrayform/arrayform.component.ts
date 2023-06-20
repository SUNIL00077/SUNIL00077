import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-arrayform',
  templateUrl: './arrayform.component.html',
  styleUrls: ['./arrayform.component.css']
})
export class ArrayformComponent {


 loginForm:any;
 constructor() {
    this.loginForm = new FormGroup({
   'userName': new FormControl(null,Validators.required),
   'email': new FormControl('',[Validators.required, Validators.email,Validators.pattern('sunil@gmail.com')]),
   'password': new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
   'skills':new FormArray([
     new FormControl(null,Validators.required),

   ])
 },
 )
 }

  ngOnInit() {
  }

  onAddSkills(){
   this.loginForm.get('skills').push(new FormControl(null,Validators.required))
  }

 OnSubmit(){
   console.log(this.loginForm.value);
    alert("Login Successfull");
 }
}
