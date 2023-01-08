import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://dev.tab.kitecash.in/simulator/fis/transaction';

  constructor(private http: HttpClient) { }

  preAuth(data) {
    return this.http.post(this.API_URL + '/authorization', data);
  }

  postAuth(data) {
    return this.http.post(this.API_URL + '/posting', data);
  }

  reversal(data) {
    return this.http.post(this.API_URL + '/reversal', data);
  }
}
