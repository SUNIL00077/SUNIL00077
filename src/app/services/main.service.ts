import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

  userdata(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
  }
}
