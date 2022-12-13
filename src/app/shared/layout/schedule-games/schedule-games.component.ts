import { Event } from 'src/app/core/model/schedule.model';
import { Component, Input, OnInit } from '@angular/core';
import { ScheduleGamesService } from './services/schedule-games.service';

@Component({
  selector: 'app-schedule-games',
  templateUrl: './schedule-games.component.html',
  styleUrls: ['./schedule-games.component.scss'],
})
export class ScheduleGamesComponent implements OnInit {
  @Input() loading = true;
  @Input() game: string = '';
  @Input() dataSource: Event[] = [];
  @Input() isHistory: boolean = false;

  constructor(private scheduleGamesService: ScheduleGamesService) {}

  ngOnInit(): void {}
}
