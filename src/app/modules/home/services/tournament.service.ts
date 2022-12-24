import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  private baseURL = environment.LOLESPORTSAPI.ESPORTS_API

  constructor(private http: HttpClient) { }

  getTournaments(){
    return this.http.get(`${this.baseURL}/getTournamentsForLeague?hl=pt-BR`)
  }
}
