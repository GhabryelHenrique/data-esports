import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { GameFrame } from '../../model/gameFrame';

@Injectable({
  providedIn: 'root',
})
export class GameFrameService {
  public gameFrame: BehaviorSubject<GameFrame> = new BehaviorSubject(new GameFrame);

  constructor() {}

  setValue(value: GameFrame) {
    this.gameFrame.next(value);
  }

  getValue(){
    return this.gameFrame.value
  }
}
