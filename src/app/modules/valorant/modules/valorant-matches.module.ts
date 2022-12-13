import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { GameHeaderModule } from 'src/app/shared/layout/game-header/game-header.module';
import { GameSelectorModule } from 'src/app/shared/layout/game-selector/game-selector.module';
import { PlayerCardModule } from 'src/app/shared/layout/player-card/player-card.module';
import { ValorantMatchesLiveComponent } from './valorant-matches-live/valorant-matches-live.component';

const routes: Routes = [
  {
    path: 'live/:id',
    component: ValorantMatchesLiveComponent,
  },
  {
    path: 'history/:id',
    component: ValorantMatchesLiveComponent,
  },
];

@NgModule({
  imports: [
    GameHeaderModule,
    CommonModule,
    RouterModule.forChild(routes),
    NzTableModule,
    PlayerCardModule,
    PipesModule,
    GameSelectorModule,
  ],
  declarations: [ValorantMatchesLiveComponent],
})
export class ValorantMatchesModule {}
