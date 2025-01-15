import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from '../models/Events';

@Injectable({
  providedIn: 'root'
})

export class EventsService {

  private httpClient = inject(HttpClient);

  private baseURL = 'http://localhost:3000';

  constructor() { }

  getNumberEvents() {
    return this.httpClient.get<Events>(`${this.baseURL}/estadistics/number`);
  }

  getLastEvents() {
    return this.httpClient.get<Events>(`${this.baseURL}/estadistics/last`);
  }
}
