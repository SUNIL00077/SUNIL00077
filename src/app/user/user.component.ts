import { Component } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
usersdata:any;
  constructor(private user:MainService) {}

getdata(){
  this.user.userdata().subscribe(res =>{
    this.usersdata=res
  })
}

  ngOnInit():void{
  }
}
