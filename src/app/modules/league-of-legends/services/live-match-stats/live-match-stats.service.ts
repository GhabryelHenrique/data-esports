import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LiveMatchStatsService {
  apiUrl = environment.LOLESPORTSAPI.FEEDLOLAPI;
  API_URL_PERSISTED = environment.LOLESPORTSAPI.ESPORTS_API;

  constructor(private http: HttpClient) {}

  getWindow(id: any, params: any) {
    return this.http.get(`${this.apiUrl}/window/${id}`, {
      params: params,
    });
  }

  getLiveDetailsGame(id: any, params: any) {
    return this.http.get(`${this.apiUrl}/details/${id}`, {
      params: params,
    });
  }

  getGameDetails(params: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL_PERSISTED}/getEventDetails`, {
      params: params,
    });
  }
}
