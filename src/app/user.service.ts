import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  // z(){
  //   return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
  // } 
  getdata(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
}
