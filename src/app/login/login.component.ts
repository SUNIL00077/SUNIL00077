import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder){}
hide = true;
loginform=new FormGroup({
  'name':new FormControl('',[Validators.required,Validators.pattern("[A-Z][a-z]+")]),
  'email':new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
  'password':new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)])
})

get email(){
  return this.loginform.get('email')
}
login(){
  console.log(this.loginform.value)
}


// loginform=this.fb.group({
//     name:['',Validators.required],
//     password:['',Validators.required]
// })
}
