import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScheduleGamesService {
  baseUrl = environment.LOLESPORTSAPI.ESPORTS_API;
  tokenLoLEsports = environment.LOLESPORTSAPI.TOKEN_ACCESS;

  constructor(private http: HttpClient) {}

  getSchedule() {
    const httpOptions = new HttpHeaders({
      'x-api-key': this.tokenLoLEsports,
    });
    return this.http.get(`${this.baseUrl}/getSchedule?hl=pt-BR`, {
      headers: httpOptions,
    });
  }
}
