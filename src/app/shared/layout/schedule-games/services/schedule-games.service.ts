import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Schedule } from 'src/app/core/model/schedule.model';

@Injectable({
  providedIn: 'root',
})
export class ScheduleGamesService {
  lolBaseUrl = environment.LOLESPORTSAPI.ESPORTS_API;
  valorantBaseUrl = environment.VALORANTESPORTSAPI.ESPORTS_API;

  constructor(private http: HttpClient) {}

  getLoLScheduleGames(): Observable<Schedule> {
    return this.http.get<Schedule>(`${this.lolBaseUrl}/getSchedule?hl=pt-BR`);
  }

  getValorantLiveGames(): Observable<Schedule> {
    return this.http.get<Schedule>(
      `${this.valorantBaseUrl}/getLiveDetails?hl=pt-BR&sport=val&`
    );
  }

  getValorantVodGames(): Observable<Schedule> {
    return this.http.get<Schedule>(
      `${this.valorantBaseUrl}/getVods?hl=pt-BR&sport=val&`
    );
  }
}
