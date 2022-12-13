import { Component, Input, OnInit } from '@angular/core';
import { LolMatch } from 'src/app/modules/league-of-legends/modules/models/lol-matches.model';
import { Match } from 'src/app/core/model/schedule.model';

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.scss'],
})
export class GameHeaderComponent implements OnInit {
  @Input() matchDetails?: Match | LolMatch;

  constructor() {}

  ngOnInit() {}
}
