import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }
  getUsers() {
    //return this.http.get('https://randomuser.me/api/?results=10');
    return this.http.get('http://52.15.150.223:8080/api/Usuarios');
  }

}
