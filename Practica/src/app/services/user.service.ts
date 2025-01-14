import { inject, Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/Users';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  private httpClient = inject(HttpClient);

  private baseURL = 'http://localhost:3000';

  constructor() { }

  getUsers() {
    return this.httpClient.get<Users>(`${this.baseURL}/users`);
  }

  getUserById(id: string) {
    return this.httpClient.get<User>(`${this.baseURL}/users/${id}`);
  }

  createUser(user: { username: string, email: string }) {
    return this.httpClient.post(`${this.baseURL}/users`, user);
  }

  loginUser(user: { username: string, email: string }) {
    return this.httpClient.post<User>(`${this.baseURL}/users/login`, user);
  }

  updateUserBuyed(idU: string, idI: string) {
    return this.httpClient.put(`${this.baseURL}/users/${idU}/buyed`, { buyed: idI });
  }

}
