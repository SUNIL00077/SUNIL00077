import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value:any, ...args: number[]): unknown {
    let currDate=new Date().getFullYear();
    let userDate=new Date(value).getFullYear()

console.log()
    return currDate-userDate;
  }

}
