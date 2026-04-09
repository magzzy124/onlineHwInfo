import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = "http://localhost:8085/"
  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get("/api/data.json")
  }

}
