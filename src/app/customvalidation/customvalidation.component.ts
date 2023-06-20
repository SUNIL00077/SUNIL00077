import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from '../customvalidators/passwordmatch';

@Component({
  selector: 'app-customvalidation',
  templateUrl: './customvalidation.component.html',
  styleUrls: ['./customvalidation.component.css']
})
export class CustomvalidationComponent {

  loginForm:any;
  constructor() {
     this.loginForm = new FormGroup({
    'email': new FormControl('',[Validators.required, Validators.email,Validators.pattern('sunil@gmail.com')]),
    'date': new FormControl('',[Validators.required, Validators.email]),

    'password': new FormControl(null,[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    'confirmpassword': new FormControl(null,[Validators.required]),
  },
  [passwordMatch('password','confirmpassword')]
  )
  }

  login(){
    console.log(this.loginForm.value)
  }
}
