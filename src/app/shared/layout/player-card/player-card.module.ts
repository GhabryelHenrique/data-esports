import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCardComponent } from './player-card.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { GameInformationModule } from '../game-information/game-information.module';

@NgModule({
  declarations: [PlayerCardComponent],
  imports: [
    CommonModule,
    NzBadgeModule,
    NzNoAnimationModule,
    GameInformationModule,
  ],
  exports: [PlayerCardComponent],
})
export class PlayerCardModule {}
