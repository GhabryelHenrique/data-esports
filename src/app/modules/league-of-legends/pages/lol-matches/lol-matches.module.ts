import { GameInformationModule } from './../../../../shared/layout/game-information/game-information.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LolMatchesComponent } from './lol-matches.component';
import { LoLMatchesRoutingModule } from './lol-matches-routing.module';
import { LolMatchesLiveComponent } from './pages/lol-matches-live/lol-matches-live.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { PlayerCardModule } from 'src/app/shared/layout/player-card/player-card.module';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { AuthorizationTokenModule } from 'src/app/core/interceptors/authorization-token.interceptor';
@NgModule({
  imports: [
    CommonModule,
    LoLMatchesRoutingModule,
    NzTableModule,
    PlayerCardModule,
    AuthorizationTokenModule,
    GameInformationModule,
    PipesModule,
  ],
  declarations: [LolMatchesComponent, LolMatchesLiveComponent],
})
export class LolMatchesModule {}
