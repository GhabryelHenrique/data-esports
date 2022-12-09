import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  apiUrl = environment.YOUTUBE_URL_VOD;

  constructor() {}

  watchVod(parameter: string) {
    return `${this.apiUrl}/${parameter}`;
  }
}
