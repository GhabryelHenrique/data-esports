import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameHeaderComponent } from './game-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GameHeaderComponent],
  exports: [GameHeaderComponent],
})
export class GameHeaderModule {}
