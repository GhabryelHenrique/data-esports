import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  baseUrl = environment.LOLESPORTSAPI.API_LOLESPORTS

constructor(private http: HttpClient) { }

  getPlayers(playerSlug: string, tournamentID: string){
    return this.http.get(`${this.baseUrl}/players`, {
      params:
      {
        slug: playerSlug,
        tournament: tournamentID
      },
    });
  }
}
