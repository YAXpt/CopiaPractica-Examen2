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
    return this.httpClient.get(`${this.baseURL}/estadistics/number`);
  }

  getLastEvents() {
    return this.httpClient.get<Events>(`${this.baseURL}/estadistics/last`);
  }

  //añadir sessionId
  createEvent(event: { sessionId: string, llocEvent: string, tipusEvent: string }) {
    return this.httpClient.post(`${this.baseURL}/estadistics`, event);
  }

}
