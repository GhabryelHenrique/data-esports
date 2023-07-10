import { GameFrameService } from 'src/app/core/services/game/gameFrame.service';
import { TrovoService } from './../../../../../../core/services/providersPlayer/trovo.service';
import { Providers } from './../../../../../../core/model/provider.enum';
import { Frame, GameDetails } from './../../../models/lol-game-detais.model';
import { Locale } from './../../../../../../core/model/locale.enum';
import { YoutubeService } from '../../../../../../core/services/providersPlayer/youtube.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/modules/league-of-legends/services/matches/matches.service';
import { TwitchService } from '../../../../../../core/services/providersPlayer/twitch.service';
import { LiveMatchStatsService } from '../../../../services/live-match-stats/live-match-stats.service';
import {
  LolDataGameDetails,
  LolEvent,
  LolVOD,
} from '../../../models/lol-matches.model';
import { LolGame, LolMatch } from './../../../models/lol-matches.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UseStateService } from '../../services/useState.service';

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
  gameInfo: GameDetails = new GameDetails();
  parameter: string = '';
  matchStream: any[] = [];
  gameFrame: any;
  selectedOption = 'en-US';
  goRepeat = true;
  isLive: boolean = false;
  totalGames: LolGame[] = [];
  noVod: boolean = false;
  isHistory: boolean = false;
  gameNumber: number = 0;
  currentLocale?: string;
  form: FormGroup = new FormGroup({});
  localeArr: any[] = [];
  matchTournament?: LolEvent;
  dots: string = '';
  localeVod: string = '';
  gameState: string = '';
  provider: string = '';
  providerVod: string = '';
  providersArray: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matchesService: MatchesService,
    private liveMatchStatsService: LiveMatchStatsService,
    private twitchService: TwitchService,
    private trovoService: TrovoService,
    private youtubeService: YoutubeService,
    private fb: FormBuilder,
    private gameFrameService: GameFrameService
  ) {
    this.form = this.fb.group({
      website: [this.selectedOption, [Validators.required]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => (this.matchID = params['id']));
    this.getLiveGameDetails();
  }

  ngOnDestroy(): void {
    this.goRepeat = false;
  }

  async setVod(locale: string, provider: string, gameState: string) {
    var parameterFind: LolVOD | any;

    if (gameState !== 'inProgress') {
      parameterFind = this.totalGames[this.gameNumber - 1].vods.find(
        (obj: LolVOD) => {
          return obj.locale === locale && obj.provider === provider;
        }
      ) as LolVOD;
    } else {
      parameterFind = {
        parameter: this.matchStream[this.gameNumber - 1].parameter,
      };
    }

    if (!parameterFind) {
      this.noVod = true;
    } else {
      this.providerVod = parameterFind.parameter;

      if (provider === 'youtube') {
        this.parameter = this.getUrlVodYoutube(parameterFind.parameter);
      }
      if (provider === 'twitch') {
        this.parameter = this.getUrlVodTwitch(
          parameterFind.parameter,
          parameterFind.startMillis,
          gameState
        );
      }
      if (provider === 'trovo') {
        this.parameter = this.getUrlVodTrovo(parameterFind.parameter);
      }
      if (provider === 'afreeca') {
        this.parameter = this.getUrlVodTwitch(
          parameterFind.parameter,
          parameterFind.startMillis,
          gameState
        );
      }
    }
  }

  msToTime(duration: number) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds: number | string = Math.floor((duration / 1000) % 60),
      minutes: number | string = Math.floor((duration / (1000 * 60)) % 60),
      hours: number | string = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + 'h' + minutes + 'm' + seconds + 's';
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

  getUrlVodYoutube(parameter: string) {
    return this.youtubeService.watchVod(parameter);
  }

  getUrlVodTwitch(parameter: string, time: number, gameState?: string) {
    if (gameState === 'inProgress') {
      return this.twitchService.watchLive(parameter);
    }
    return this.twitchService.watchVod(parameter, this.msToTime(time));
  }

  getUrlVodTrovo(parameter: string) {
    return this.trovoService.watchLive(parameter);
  }

  getLiveGameDetails() {
    this.liveMatchStatsService
      .getGameDetails({ hl: 'pt-BR', id: this.matchID })
      .subscribe(async (res: LolDataGameDetails) => {
        this.matchTournament = res.data.event;
        this.matchDetails = res.data.event.match;
        this.matchStream = res.data.event.streams;

        this.totalGames = res.data.event.match.games.filter((obj: any) => {
          return obj.state != 'unneeded' && obj.state != 'unstarted';
        });

        const inProgressGame = this.totalGames.find((element: any) => {
          return element.state === 'inProgress';
        });

        if (inProgressGame) {
          this.gameId = inProgressGame.id;
          this.isLive = true;
          this.localeVod = this.matchStream[0].locale;
          this.provider = this.matchStream[0].provider;
          this.gameNumber = inProgressGame.number;
          this.gameState = this.totalGames[this.gameNumber - 1].state;
          this.getWindowGame();
          this.getLiveGameStatus();
          await this.setVod(this.localeVod, this.provider, this.gameState);
        } else {
          const last = this.totalGames[this.totalGames.length - 1];
          this.gameNumber = last.number;
          this.getHistory(last.id);
          this.getLiveGameStatus();
          if (this.totalGames[this.gameNumber - 1].vods.length === 0) {
            this.noVod = true;
          } else {
            this.localeVod =
              this.totalGames[this.gameNumber - 1].vods[0].locale;
            this.provider =
              this.totalGames[this.gameNumber - 1].vods[0].provider;
            this.gameState = this.totalGames[this.gameNumber - 1].state;
            await this.setVod(
              this.localeVod,
              this.provider,
              this.totalGames[this.gameNumber - 1].state
            );
          }
        }
      });
  }

  async getHistory(id: any) {
    this.gameId = id;
    const date = this.getISODateMultiplyOf10();
    this.matchesService
      .getMatchesDetails(id, { startingTime: date })
      .subscribe((res: GameDetails) => {
        res.frames = res.frames.reverse();
        this.gameInfo = res;
        this.goRepeat = false;
      });
  }

  twitchStream(id: any) {
    this.twitchProvider = this.matchStream.filter(function (obj: any) {
      return obj.provider == 'twitch';
    });
  }

  async getWindowGame() {
    const date = this.getISODateMultiplyOf10();
    this.liveMatchStatsService
      .getWindow(this.gameId, { hl: 'pt-BR', startingTime: date })
      .subscribe((res: any) => {
        this.loadDots();
        res.frames = res.frames.reverse();

        this.gameInfo = res;
        this.repeat();
        if (this.gameInfo.frames[0].gameState == 'finished') {
          this.goRepeat = false;
        }
      });
  }

  loadDots() {
    if (!this.gameInfo) {
      this.dots = this.dots + '.';
      if (this.dots.length > 3) {
        this.dots = '';
        setTimeout(() => {
          this.loadDots();
        }, 500);
      }
    }
  }

  getLiveGameStatus() {
    const date = this.getISODateMultiplyOf10();
    this.liveMatchStatsService
      .getLiveDetailsGame(this.gameId, { hl: 'pt-BR', startingTime: date })
      .subscribe((res: any) => {
        if (res.frames.reverse()[0].gameState == 'finished') {
          this.goRepeat = false;
        }

        this.gameFrame = res;

        this.gameFrameService.setValue(res.frames.reverse()[0]);
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
      }, 2000);
    }
  }

  setImagesCountry(locale: string) {
    switch (locale) {
      case 'en-US':
        return Locale.en_US;
      case 'es-ES':
        return Locale.es_ES;
      case 'es-MX':
        return Locale.es_MX;
      case 'it-IT':
        return Locale.it_IT;
      case 'pt-BR':
        return Locale.pt_BR;
      case 'pt-PT':
        return Locale.pt_PT;
      case 'tr-TR':
        return Locale.tr_TR;
      case 'nl-NL':
        return Locale.nl_NL;
      case 'ko-KR':
        return Locale.ko_KR;
      default:
        return Locale.en_US;
    }
  }

  setImagesProviders(provider: string, locale: any) {
    switch (provider) {
      case 'twitch':
        return Providers.twitch;
      case 'youtube':
        return Providers.youtube;
      case 'trovo':
        return Providers.trovo;
      default:
        return Providers.twitch;
    }
  }

  setNameCountry(locale: string) {
    switch (locale) {
      case 'en-US':
        return Locale.en_US_Name;
      case 'es-ES':
        return Locale.es_ES_Name;
      case 'es-MX':
        return Locale.es_MX_Name;
      case 'it-IT':
        return Locale.it_IT_Name;
      case 'pt-BR':
        return Locale.pt_BR_Name;
      case 'pt-PT':
        return Locale.pt_PT_Name;
      case 'tr-TR':
        return Locale.tr_TR_Name;
      case 'nl-NL':
        return Locale.nl_NL_Name;
      case 'ko-KR':
        return Locale.ko_KR_Name;
      default:
        return Locale.en_US_Name;
    }
  }

  get f() {
    return this.form.controls;
  }

  setGameVod(gameVod: any) {
    return gameVod;
  }
}
