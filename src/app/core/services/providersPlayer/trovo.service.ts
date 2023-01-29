import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrovoService {

  apiUrl = environment.PLAYERS_STREAM.TROVO_URL_VOD

constructor() { }

watchLive(id: string) {
    return `${this.apiUrl}?streamername=${id}`
}
}
