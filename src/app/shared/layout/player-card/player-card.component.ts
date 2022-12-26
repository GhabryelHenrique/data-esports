import { LolEvent } from './../../../modules/league-of-legends/modules/models/lol-matches.model';
import { PlayersService } from './../../../core/services/players/players.service';
import { environment } from './../../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';
import { Frame } from 'src/app/modules/league-of-legends/modules/models/lol-game-detais.model';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
})
export class PlayerCardComponent {
  @Input() matchID: any;
  @Input() matchDetails?: any;
  @Input() matchTournament: any;
  gameId?: number;
  @Input() gameInfo: any;
  @Input() gameFrame!: Frame;

  baseUrl = environment.CHAMPIONS_URL;

  constructor(private playersService: PlayersService){}

  getBlueDifference(i: number) {
    return (
      this.gameInfo.frames[0].blueTeam.participants[i].totalGold -
      this.gameInfo.frames[0].redTeam.participants[i].totalGold
    );
  }

  getRedDifference(i: number) {
    return (
      this.gameInfo.frames[0].redTeam.participants[i].totalGold -
      this.gameInfo.frames[0].blueTeam.participants[i].totalGold
    );
  }

  clickEventHandler(player: any){
    this.playersService.getPlayers(player.esportsPlayerId, this.matchTournament.tournament.id).subscribe((res) => {
      console.log(res)
    })
  }
}
