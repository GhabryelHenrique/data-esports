import { TournamentService } from './services/tournament.service';
import { ScheduleGamesService } from './../../shared/layout/schedule-games/services/schedule-games.service';
import { Component, OnInit } from '@angular/core';
import { Schedule, Event } from 'src/app/core/model/schedule.model';
import { League, Tournament, TournamentElement } from './models/tournament.model';

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

  slugsTournament: TournamentElement[] = []
  teste : any[] = []

  constructor(private scheduleGamesService: ScheduleGamesService, private tournamentService: TournamentService) {}

  ngOnInit() {
    this.getValorantVodGames();
    this.getValorantLiveGames();
    this.getLoLScheduleGames();
    this.getLoLCompleteGames();
    this.getTournamentsForLeague()
  }

  getLoLScheduleGames(pageToken?: string | null) {
    this.scheduleGamesService
      .getLoLScheduleGames(pageToken ? pageToken : null)
      .subscribe((res: Schedule) => {
        this.loading = true;
        this.scheduleMatches = res.data.schedule.events

        this.nextScheduleMatches = this.scheduleMatches.filter((obj: Event) => {
          return obj.state === 'unstarted';
        });
        this.loading = false;
      });
  }

  getLoLCompleteGames(tournamentId?: string | null){
    this.scheduleGamesService
    .getLoLCompleteGames(tournamentId ? tournamentId : null)
    .subscribe((res: Schedule) => {
      this.loading = true;
      this.pastScheduleMatches = res.data.schedule.events.reverse()

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
    // TODO: Pesquisar Endpoint
  }

  getTournamentsForLeague(){
    this.tournamentService.getTournaments().subscribe(
      (res: any) => {
        res.data.leagues.forEach((leagues: League)  => {
          leagues.tournaments.forEach((tournament: TournamentElement) => {
            this.slugsTournament.push(tournament)
          });
        });
      },
      )
  }

  setFilterLeagues(reference: any[]): any[] {
    console.log(reference)
    const leaguesFilter: any[] = []
    reference.forEach(obj => {
      if(!leaguesFilter.find(element => {return obj.league.name == element.name})){
        leaguesFilter.push(obj.league)
      }
    })

    return leaguesFilter
}
}
