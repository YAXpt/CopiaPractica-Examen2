import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pikmin } from '../models/Pikmin';
import { Pikmins } from '../models/Pikmins';

@Injectable({
  providedIn: 'root'
})

export class PikminService {

  private httpClient = inject(HttpClient);

  private baseURL = 'http://localhost:3000';

  constructor() { }

  getItems() {
    return this.httpClient.get<Pikmins>(`${this.baseURL}/pikmins`);
  }

  getItem(id: number) {
    return this.httpClient.get<Pikmin>(`${this.baseURL}/pikmins/${id}`);
  }

}
