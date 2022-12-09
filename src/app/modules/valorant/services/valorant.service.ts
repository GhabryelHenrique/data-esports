import { environment } from './../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValorantService {
  baseUrl = environment.VALORANTESPORTSAPI.API_HOST;
  tokenAccess = environment.VALORANTESPORTSAPI.TOKEN_ACCESS;

  constructor(private http: HttpClient) {}

  getLiveGames() {
    const httpOptions = new HttpHeaders({
      'X-RapidAPI-Key': this.tokenAccess,
      'X-RapidAPI-Host': this.baseUrl,
    });
    return this.http.get(`https://${this.baseUrl}/live`, {
      headers: httpOptions,
    });
  }

  getGamesDetails(id: any) {
    const httpOptions = new HttpHeaders({
      'X-RapidAPI-Key': this.tokenAccess,
      'X-RapidAPI-Host': this.baseUrl,
    });
    return this.http.get(`https://${this.baseUrl}/event/${id}`, {
      headers: httpOptions,
    });
  }
}
