import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCardComponent } from './player-card.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@NgModule({
  declarations: [PlayerCardComponent],
  imports: [CommonModule, NzBadgeModule, NzNoAnimationModule, MatProgressBarModule],
  exports: [PlayerCardComponent],
})
export class PlayerCardModule {}
