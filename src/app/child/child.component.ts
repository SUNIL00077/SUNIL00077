import { Component, EventEmitter, Input, Output,HostListener } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() item=0
  @Input() obj:any;
  // @Input() data:any;
  @Input() name:any
@Input() daaata:any;
  // @Output() childevent=new EventEmitter()
  // fireevent(){
  //   this.childevent.emit("this data come to parent")
  // }
  // @Output() childdata=new EventEmitter();

@Output() objdata=new EventEmitter();
sunil={
  name:"sunil",
  age:24,
  city:"pune"
}

@Output() data=new EventEmitter();
array=["sunil","santosh"];
@Output() givedata=new EventEmitter();
dat(){
this.givedata.emit(this.array)
}
@Output() studentdata=new EventEmitter()
// @Output() daaata=new EventEmitter()
@Output() ddata=new EventEmitter()
@Output() dta=new EventEmitter()
// @HostListener('click',['$event'])
// show(){
// alert('this is hostlistener')
// }
ngOnInIt(): void{}
}
