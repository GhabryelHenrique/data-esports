import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TwitchService {
  apiUrl = environment.TWITCH_URL_STREAM;
  constructor() {}

  streamLive(id: any) {
    return `${this.apiUrl}?channel=${id}&parent=${window.location.host}`;
  }
}
