import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from '../models/Events';

@Injectable({
  providedIn: 'root'
})

export class EventsService {

  private httpClient = inject(HttpClient);
d
  private baseURL = 'http://localhost:3000';

  constructor() { }

  getItems() {
    return this.httpClient.get<Pikmins>(`${this.baseURL}/pikmins`);
  }

  getItem(id: number) {
    return this.httpClient.get<Pikmin>(`${this.baseURL}/pikmins/${id}`);
  }

}
