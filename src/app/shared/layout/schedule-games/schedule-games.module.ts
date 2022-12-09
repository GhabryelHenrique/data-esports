import { ScheduleGamesComponent } from './schedule-games.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card-match/card-match.module';

@NgModule({
  declarations: [ScheduleGamesComponent],
  imports: [CommonModule, CardModule],
  exports: [ScheduleGamesComponent],
})
export class ScheduleGamesModule {}
