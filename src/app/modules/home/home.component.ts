import { ScheduleGamesService } from './../../shared/layout/schedule-games/services/schedule-games.service';
import { Component, OnInit } from '@angular/core';
import { Schedule, Event } from 'src/app/core/model/schedule.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  games = [
    {
      game: 'League of Legends',
    },
    {
      game: 'Valorant',
    },
  ];

  scheduleMatches: Event[] = [];
  loading: boolean = false;
  nextScheduleMatches: Event[] = [];
  pastScheduleMatches: Event[] = [];

  valScheduleMatches: Event[] = [];
  nextValScheduleMatches: Event[] = [];
  pastValScheduleMatches: Event[] = [];

  constructor(private scheduleGamesService: ScheduleGamesService) {}

  ngOnInit() {
    this.getValorantVodGames();
    this.getValorantLiveGames();
    this.getLoLScheduleGames();
  }

  getLoLScheduleGames() {
    this.scheduleGamesService
      .getLoLScheduleGames()
      .subscribe((res: Schedule) => {
        this.loading = true;
        this.scheduleMatches = res.data.schedule.events.reverse();

        this.nextScheduleMatches = this.scheduleMatches.filter((obj: Event) => {
          return obj.state === 'unstarted';
        });
        this.pastScheduleMatches = this.scheduleMatches.filter((obj: Event) => {
          return obj.state === 'completed';
        });
        this.loading = false;
      });
  }

  getValorantVodGames() {
    this.scheduleGamesService
      .getValorantVodGames()
      .subscribe((res: Schedule) => {
        this.pastValScheduleMatches = res.data.schedule.events.reverse();
      });
  }

  getValorantLiveGames() {
    // this.scheduleGamesService
    //   .getValorantLiveGames()
    //   .subscribe((res: Schedule) => {
    //     this.valScheduleMatches = res.data.schedule.events.reverse();
    //     this.nextValScheduleMatches = this.valScheduleMatches.filter(
    //       (obj: Event) => {
    //         return obj.state === 'unstarted';
    //       }
    //     );
    //     this.pastValScheduleMatches = this.valScheduleMatches.filter(
    //       (obj: Event) => {
    //         return obj.state === 'completed';
    //       }
    //     );
    //   });
  }
}
