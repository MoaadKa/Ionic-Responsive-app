import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getIp() {
    return this.http.get<any>("https://api.db-ip.com/v2/free/self")
  }
}
