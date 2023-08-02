import { Injectable } from '@angular/core';
import { WebRequestService } from 'src/app/utils/web.service';
import { City } from './city.model';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private webReqService: WebRequestService) {}

  getAll() {
    return this.webReqService.get('/city/getcities');
  }

  add(city: City) {
    // this method will add a note to the notes array
    return this.webReqService.post('/notes', city);
  }

  delete(id: string) {
    return this.webReqService.delete('/city/deletecity?uuid=' + id);
  }
}
