import { PlayersService } from './../../../core/services/players/players.service';
import { environment } from './../../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';
import { GameFrameService } from 'src/app/core/services/game/gameFrame.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
})
export class PlayerCardComponent implements OnInit {
  @Input() matchID: any;
  @Input() matchDetails?: any;
  @Input() matchTournament: any;
  @Input() gameInfo: any;

  gameId?: number;

  baseUrl = environment.CHAMPIONS_URL;

  constructor(
    private playersService: PlayersService,
    private gameFrameService: GameFrameService
  ) {}

  ngOnInit(): void {
  }

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

  clickEventHandler(player: any) {
    this.playersService
      .getPlayers(player.esportsPlayerId, this.matchTournament.tournament.id)
      .subscribe((res) => {
        console.log(res);
      });
  }

  calculatePercentage(team: any, playerIndex: any) {
    if (!team || playerIndex < 0 || playerIndex >= team.participants.length) {
      return 0;
    }

    const participant = team.participants[playerIndex];

    if (!participant || participant.maxHealth === 0) {
      return 0;
    }

    const fullValue = participant.maxHealth;
    const partialValue = participant.currentHealth;

    const percentage = (100 * partialValue) / fullValue;
    return Math.round(percentage * 100) / 100; // Arredonda para duas casas decimais
  }
}
