import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GameDetails } from '../../modules/models/lol-game-detais.model';
@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  apiUrl = environment.PANDASCORE.BASE_URL;

  apiLoLEsports = environment.LOLESPORTSAPI.ESPORTS_API;
  apiFeedLoLEsports = environment.LOLESPORTSAPI.FEEDLOLAPI;
  tokenLoLEsports = environment.LOLESPORTSAPI.TOKEN_ACCESS;

  constructor(private http: HttpClient) {}

  getMatches(game: any, param?: any) {
    return this.http.get(`${this.apiUrl}/${game}/matches/running`, {
      params: param,
    });
  }

  getRunningMatches(params?: any) {
    return this.http.get(`${this.apiLoLEsports}/getLive`, {
      params: params,
    });
  }

  getMatchesFilterByID(params: any) {
    return this.http.get(`${this.apiLoLEsports}/getGames`, {
      params: params,
    });
  }

  getMatchesDetails(id: any, params?: any): Observable<GameDetails> {
    return this.http.get<GameDetails>(
      `${this.apiFeedLoLEsports}/window/${id}`,
      {
        params: params,
      }
    );
  }

  getUpcomingMatches(game: any, params?: any) {
    return this.http.get(`${this.apiUrl}/${game}/matches/upcoming`, {
      params: params,
    });
  }

  teste() {
    return this.http.get('https://api.lolesports.com/api/v1/players', {
      params: {
        slug: 'vizicsacsi',
        tournament: '639684',
      },
    });
  }
}
