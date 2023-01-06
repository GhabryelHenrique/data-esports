import { Event } from 'src/app/core/model/schedule.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScheduleGamesService } from './services/schedule-games.service';

@Component({
  selector: 'app-schedule-games',
  templateUrl: './schedule-games.component.html',
  styleUrls: ['./schedule-games.component.scss'],
})
export class ScheduleGamesComponent implements OnInit {
  @Input() loading = true;
  @Input() game: string = '';
  @Input() dataSource: any[] = [];
  @Input() isHistory: boolean = false;
  @Output() proximaPagina: EventEmitter<any> = new EventEmitter();

  constructor(private scheduleGamesService: ScheduleGamesService) {}

  ngOnInit(): void {}

  eventProximaPagina(event: any){
this.proximaPagina.emit(event)
  }
}
