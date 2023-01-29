import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UseStateService {

  public gameInfo$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public gameFrame$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  setGameInfo(gameInfo: any){
    this.gameInfo$.next(gameInfo);
  }

  setGameFrame(gameFrame: any){
    this.gameFrame$.next(gameFrame);
  }

  getGameInfo(){
    return this.gameInfo$.getValue();
  }

  getGameFrame(){
    return this.gameFrame$.getValue();
  }
}
