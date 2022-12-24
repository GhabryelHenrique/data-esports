import { GameSelectorModule } from './../../../../shared/layout/game-selector/game-selector.module';
import { GameHeaderModule } from './../../../../shared/layout/game-header/game-header.module';
import { GameInformationModule } from './components/game-information/game-information.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LolMatchesComponent } from './lol-matches.component';
import { LoLMatchesRoutingModule } from './lol-matches-routing.module';
import { LolMatchesLiveComponent } from './pages/lol-matches-live/lol-matches-live.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { PlayerCardModule } from 'src/app/shared/layout/player-card/player-card.module';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { AuthorizationTokenModule } from 'src/app/core/interceptors/authorization-token.interceptor';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoLMatchesRoutingModule,
    NzTableModule,
    PlayerCardModule,
    ReactiveFormsModule,
    AuthorizationTokenModule,
    MatSelectModule,
    GameHeaderModule,
    PipesModule,
    GameInformationModule,
    GameSelectorModule,
  ],
  declarations: [LolMatchesComponent, LolMatchesLiveComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class LolMatchesModule {}
