import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../../services/matches/matches.service';

@Component({
  selector: 'app-lol-matches',
  templateUrl: './lol-matches.component.html',
})
export class LolMatchesComponent implements OnInit {
  constructor(private matchesService: MatchesService) {}

  tableContent: any;

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.matchesService.getMatches('lol').subscribe((res: any) => {
      this.tableContent = res;
    });
  }
}
