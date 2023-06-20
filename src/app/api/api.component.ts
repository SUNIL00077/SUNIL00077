import { Component } from '@angular/core';
import { MainService } from '../services/main.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  usersdata:any;
constructor(private userdata:UserService) {                  
  // this.userdata.getdata().subscribe(res =>{
  //   this.usersdata=res
  // })
  this.userdata.getdata().subscribe(res =>{
    this.usersdata=res;
  })
}                                     

// getuserdata(){
//   this.userdata.userdata().subscribe(res =>{
// console.log(res)
// this.usersdata=res;
//   })
// }

getdata(){

}

ngOnInit():void{
  
}
}
