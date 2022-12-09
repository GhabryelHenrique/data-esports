import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { GameInformationModule } from 'src/app/shared/layout/game-information/game-information.module';
import { PlayerCardModule } from 'src/app/shared/layout/player-card/player-card.module';
import { ValorantMatchesLiveComponent } from './valorant-matches-live/valorant-matches-live.component';

const routes: Routes = [
  {
    path: 'live/:id',
    component: ValorantMatchesLiveComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzTableModule,
    PlayerCardModule,
    GameInformationModule,
    PipesModule,
  ],
  declarations: [ValorantMatchesLiveComponent],
})
export class ValorantMatchesModule {}
