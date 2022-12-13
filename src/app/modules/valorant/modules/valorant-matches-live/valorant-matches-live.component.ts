import { ValorantService } from './../../services/valorant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-valorant-matches-live',
  templateUrl: './valorant-matches-live.component.html',
  styleUrls: ['./valorant-matches-live.component.scss'],
})
export class ValorantMatchesLiveComponent implements OnInit {
  matchID: any;
  matchDetails: any;
  twitchProvider: any;
  gameId: any;
  totalGames: any;
  matchStream: any;
  urlVideo: any;

  constructor(
    private route: ActivatedRoute,
    private valorantService: ValorantService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.matchID = params['id']));
    console.log(localStorage.getItem('matchDetails'));
  }

  ngOnDestroy() {
    localStorage.removeItem('matchDetails');
  }

  getLiveGameDetails() {
    this.valorantService.getGamesDetails(this.matchID).subscribe((res: any) => {
      this.matchDetails = res.data.event.match;
      this.matchStream = res.data.event.streams;
      this.twitchStream(0);
      this.repeat();
    });
  }

  gameChange(event: any) {}

  twitchStream(id: any) {
    this.twitchProvider = this.matchStream.filter(function (obj: any) {
      return obj.provider == 'twitch';
    });

    this.urlVideo = `https://player.twitch.tv/?channel=${this.twitchProvider[id].parameter}&parent=ghabryelhenrique.github.io`;
  }

  repeat() {
    setTimeout(() => {
      this.getLiveGameDetails();
    }, 1000);
  }
}
