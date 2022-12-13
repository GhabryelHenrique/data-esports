import { environment } from './../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValorantService {
  baseUrl = environment.VALORANTESPORTSAPI.ESPORTS_API;

  constructor(private http: HttpClient) {}

  getLiveGames() {
    return this.http.get(`https://${this.baseUrl}/getVods?hl=pt-BR&sport=val`);
  }

  getGamesDetails(id: any) {
    return this.http.get(`https://${this.baseUrl}/event/${id}`);
  }
}
