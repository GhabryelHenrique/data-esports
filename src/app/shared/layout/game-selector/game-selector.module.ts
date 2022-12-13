import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSelectorComponent } from './game-selector.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GameSelectorComponent],
  exports: [GameSelectorComponent],
})
export class GameSelectorModule {}
