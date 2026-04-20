import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, shareReplay, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = "http://localhost:8085/"
  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get<apiResponse>("/api/data.json")
  }

  getSensorValue(sensorId: string) {
    return this.http.get<sensorType>(
      `${this.apiUrl}/Sensor?action=Get&id=${encodeURIComponent(sensorId)}`
    );
  }

}
