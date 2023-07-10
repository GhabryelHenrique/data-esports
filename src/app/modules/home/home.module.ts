import { MatSelectModule } from '@angular/material/select';
import { ScheduleGamesModule } from './../../shared/layout/schedule-games/schedule-games.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LiveModule } from 'src/app/shared/live/live.module';
import { RouterModule, Routes } from '@angular/router';
import { DonateComponent } from './pages/donate/donate.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'donate', component: DonateComponent }
];

@NgModule({
  imports: [
    CommonModule,
    LiveModule,
    ScheduleGamesModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomeComponent,DonateComponent],
})
export class HomeModule {}
