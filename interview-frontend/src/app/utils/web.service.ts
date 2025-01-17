import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  readonly ROOT_URI: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRequest(uri: string) {
    return this.http.request('GET', this.ROOT_URI + uri, {
      responseType: 'json',
    });
  }

  get(uri: string) {
    return this.http.get(this.ROOT_URI + uri);
  }

  post(uri: string, payload: Object) {
    return this.http.post(this.ROOT_URI + uri, payload);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(this.ROOT_URI + uri, payload);
  }

  delete(uri: string) {
    return this.http.delete(this.ROOT_URI + uri);
  }
}
