import { Component, Input, OnInit } from '@angular/core';
import { ScheduleGamesService } from './services/schedule-games.service';

@Component({
  selector: 'app-schedule-games',
  templateUrl: './schedule-games.component.html',
  styleUrls: ['./schedule-games.component.scss'],
})
export class ScheduleGamesComponent implements OnInit {
  scheduleMatches: any;
  loading = true;
  @Input() mode: any;

  constructor(private scheduleGamesService: ScheduleGamesService) {}

  ngOnInit(): void {
    this.getSchedule();
  }

  getSchedule() {
    this.scheduleGamesService.getSchedule().subscribe((res: any) => {
      this.scheduleMatches = res.data.schedule.events.reverse();
      this.getHistory();
    });
  }

  getHistory() {
    if (this.mode === 'Schedule') {
      this.scheduleMatches = this.scheduleMatches.filter((obj: any) => {
        return obj.state === 'unstarted';
      });
      this.loading = false;
    } else {
      this.scheduleMatches = this.scheduleMatches.filter((obj: any) => {
        return obj.state === 'completed';
      });
      this.loading = false;
    }
  }
}
