import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TwitchService {
  apiUrl = environment.PLAYERS_STREAM.TWITCH_URL_STREAM;
  constructor() {}

  watchVod(id: any, time: string) {
    return `${this.apiUrl}?video=${id}&parent=${window.location.hostname}&time=${time}`;
  }

  watchLive(id: any){
    return `${this.apiUrl}?channel=${id}&parent=${window.location.hostname}`;
  }
}
