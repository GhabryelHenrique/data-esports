import { Schedule } from './../../../../../../core/model/schedule.model';
import { ScheduleGamesService } from './../../../../../../shared/layout/schedule-games/services/schedule-games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lol-matches-history',
  templateUrl: './lol-matches-history.component.html',
  styleUrls: ['./lol-matches-history.component.scss'],
})
export class LolMatchesHistoryComponent implements OnInit {
  dataSource: any[] = [];
  historyGames: any[] = [];
  scheduleMatches: any
  loading: boolean = false;

  constructor(private scheduleGamesService: ScheduleGamesService) {}

  ngOnInit() {
    this.getLoLCompleteGames()
  }

  getLoLCompleteGames(tournamentId?: string | null){
    this.scheduleGamesService
    .getLoLCompleteGames(tournamentId ? tournamentId : null)
    .subscribe((res: Schedule) => {
      this.loading = true;
      this.historyGames = res.data.schedule.events
      this.dataSource = this.historyGames
      this.loading = false;
    });
  }

  setFilterLeagues(reference: any[]): any[] {
    const leaguesFilter: any[] = [];
    reference.forEach((obj: any) => {
      if (
        !leaguesFilter.find((element: any) => {
          return obj.league.name == element.name;
        })
      ) {
        leaguesFilter.push(obj.league);
      }
    });

    return leaguesFilter;
  }

  applyFilter(event: string) {
    this.dataSource = this.historyGames.filter((obj: any) => {
      return obj.league.name === event;
    });
  }

  search(search: string) {
    this.dataSource = this.historyGames.filter((obj: any) => {
      return obj.league.name.toLowerCase().includes(search.toLowerCase());
    });
  }
}
