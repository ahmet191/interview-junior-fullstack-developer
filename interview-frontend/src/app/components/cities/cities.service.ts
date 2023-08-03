import { Injectable } from '@angular/core';
import { WebRequestService } from 'src/app/utils/web.service';
import { City } from './city.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private webReqService: WebRequestService) {}

  getAll() {
    return this.webReqService.get('/city/getcities');
  }

  getByName(city: string) {
    if (city == '') {
      return this.webReqService.get('/city/getcities');
    }
    return this.webReqService.get('/city/getbyname/' + city);
  }

  getByCount(count: number) {
    if (count.toString() == '' || count == 0) {
      return this.webReqService.get('/city/getcities');
    }
    return this.webReqService.get('/city/getbycount/' + count);
  }

  add(city: City) {
    return this.webReqService.post('/notes', city);
  }

  delete(id: string) {
    return this.webReqService.delete('/city/deletecity?uuid=' + id);
  }
}
