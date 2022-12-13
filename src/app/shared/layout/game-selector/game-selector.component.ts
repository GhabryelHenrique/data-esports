import { Router } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LolGame } from 'src/app/modules/league-of-legends/modules/models/lol-matches.model';

@Component({
  selector: 'app-game-selector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.scss'],
})
export class GameSelectorComponent implements OnInit {
  @Input() totalGames?: LolGame[];
  @Input() gameId: any;
  @Input() matchID: any;

  @Output() changeGameEvent: EventEmitter<LolGame> = new EventEmitter();
  game: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  changeGame(game: LolGame) {
    if (this.game === 'League of Legends') {
      this.game = 'lol';
    } else if (this.game === 'Valorant') {
      this.game = 'valorant';
    }

    if (game.id === this.gameId) return;

    if (game.state === 'inProgress') {
      this.router.navigateByUrl(`/${this.game}/matches/live/${this.matchID}`);
    } else {
      this.router.navigateByUrl(
        `/${this.game}/matches/history/${this.matchID}`
      );
      this.changeGameEvent.emit(game);
    }
  }
}
