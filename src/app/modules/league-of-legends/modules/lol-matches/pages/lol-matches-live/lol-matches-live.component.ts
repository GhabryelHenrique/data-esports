import { YoutubeService } from './../../../../../../core/services/youtube/youtube.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/modules/league-of-legends/services/matches/matches.service';
import { TwitchService } from '../../../../../../core/services/twitch/twitch.service';
import { LiveMatchStatsService } from '../../../../services/live-match-stats/live-match-stats.service';
import { GameDetails } from '../../../models/lol-game-detais.model';
import { LolDataGameDetails } from '../../../models/lol-matches.model';
import { LolGame, LolMatch } from './../../../models/lol-matches.model';

@Component({
  selector: 'app-lol-matches-live',
  templateUrl: './lol-matches-live.component.html',
  styleUrls: ['./lol-matches-live.component.scss'],
})
export class LolMatchesLiveComponent implements OnInit, OnDestroy {
  matchID?: number;
  urlVideo: any;
  twitchProvider: any;
  matchDetails?: LolMatch;
  gameId: number | string = '';
  urlVod?: string;
  gameInfo?: GameDetails;
  matchStream: any[] = [];
  gameFrame: any;
  goRepeat = true;
  totalGames?: LolGame[];
  isHistory: boolean = false;
  gameNumber?: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matchesService: MatchesService,
    private liveMatchStatsService: LiveMatchStatsService,
    private twitchService: TwitchService,
    private youtubeService: YoutubeService
  ) {}

  ngOnDestroy(): void {
    this.goRepeat = false;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => (this.matchID = params['id']));
    this.getLiveGameDetails();
  }

  gameChange(game: LolGame) {
    this.getHistory(game.id);
    this.gameNumber = game.number;
  }

  changeGame(game: LolGame) {
    if (game.id === this.gameId) return;
    if (game.state === 'inProgress') {
      this.router.navigateByUrl(`/lol/matches/live/${this.matchID}`);
    } else {
      this.router.navigateByUrl(`/lol/matches/history/${this.matchID}`);
    }
  }

  getUrlVod(parameter: string) {
    this.urlVod = this.youtubeService.watchVod(parameter);
    return this.urlVod;
  }

  getLiveGameDetails() {
    this.liveMatchStatsService
      .getGameDetails({ hl: 'pt-BR', id: this.matchID })
      .subscribe((res: LolDataGameDetails) => {
        this.matchDetails = res.data.event.match;
        this.matchStream = res.data.event.streams;
        this.totalGames = res.data.event.match.games.filter((obj: any) => {
          return obj.state != 'unneeded';
        });
        const inProgressGame = this.totalGames.filter((element: any) => {
          return element.state === 'inProgress';
        });
        if (inProgressGame.length > 0) {
          this.gameId = Number(inProgressGame[0].id);
          this.getWindowGame();
        } else {
          var last = this.totalGames[this.totalGames.length - 1];
          this.gameNumber = last.number;
          this.getHistory(last.id);
        }
      });
  }

  getHistory(id: any) {
    this.gameId = id;
    const date = this.getISODateMultiplyOf10();
    this.matchesService
      .getMatchesDetails(id, { startingTime: date })
      .subscribe((res: GameDetails) => {
        this.gameInfo = res;
        this.goRepeat = false;
      });
  }

  twitchStream(id: any) {
    this.twitchProvider = this.matchStream.filter(function (obj: any) {
      return obj.provider == 'twitch';
    });

    this.urlVideo = this.twitchService.streamLive(
      this.twitchProvider[id].parameter
    );
  }

  getWindowGame() {
    const date = this.getISODateMultiplyOf10();
    this.liveMatchStatsService
      .getWindow(this.gameId, { hl: 'pt-BR', startingTime: date })
      .subscribe((res: any) => {
        this.gameInfo = res;
      });
    this.repeat();
  }

  getLiveGameStatus() {
    const date = this.getISODateMultiplyOf10();
    this.liveMatchStatsService
      .getLiveDetailsGame(this.gameId, { hl: 'pt-BR', startingTime: date })
      .subscribe((res: any) => {
        this.gameFrame = res.frames[0].participants;
      });
  }

  getISODateMultiplyOf10() {
    const date = new Date();
    date.setMilliseconds(0);

    if (date.getSeconds() % 10 !== 0) {
      date.setSeconds(date.getSeconds() - (date.getSeconds() % 10));
    }

    date.setSeconds(date.getSeconds() - 60);

    return date.toISOString();
  }

  repeat() {
    if (this.goRepeat) {
      setTimeout(() => {
        this.getWindowGame();
        this.getLiveGameStatus();
      }, 1000);
    }
  }
}
