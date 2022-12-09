import { ValorantService } from './../../modules/valorant/services/valorant.service';
import { Tournament } from './../../core/model/matches.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/modules/league-of-legends/services/matches/matches.service';

@Component({
  selector: 'live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
})
export class LiveComponent implements OnInit {
  array = [1, 2, 3, 4];

  @Input() game?: string;
  liveGame: any;
  loading: boolean = false;

  constructor(
    private matchesService: MatchesService,
    private router: Router,
    private valorantService: ValorantService
  ) {}

  ngOnInit() {
    this.loading = true;
    if (this.game === 'League of Legends') this.lolApi();
    if (this.game === 'Valorant') this.valorantApi();
    this.loading = false;
  }

  lolApi() {
    this.matchesService
      .getRunningMatches({ hl: 'pt-BR' })
      .subscribe((res: any) => {
        this.liveGame = res.data.schedule.events.filter((obj: any) => {
          return obj.match;
        });
      });
  }

  valorantApi() {
    this.valorantService.getLiveGames().subscribe(
      (res: any) =>
        (this.liveGame = res.data.schedule.events.filter((obj: any) => {
          return obj.match;
        }))
    );
  }
}
