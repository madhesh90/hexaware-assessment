import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: any;
  api_url = 'https://reqres.in/api/users/';
  constructor(private http: HttpClient) { }

  getAllUsers() {
     return this.http.get(this.api_url);
  }

  getUserById(id: number) {
    return this.http.get(this.api_url + id);
  }

  isvalidToken() {
    if (typeof(Storage) !== 'undefined') {
      const token = sessionStorage.getItem('userToken');
      if (token !== null) {
        return true;
      }
    }
  }
}
