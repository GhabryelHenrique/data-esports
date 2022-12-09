import { ScheduleGamesModule } from './../../shared/layout/schedule-games/schedule-games.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LiveModule } from 'src/app/shared/live/live.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    LiveModule,
    ScheduleGamesModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
