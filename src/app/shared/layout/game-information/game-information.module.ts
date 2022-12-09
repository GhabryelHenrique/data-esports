import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameInformationComponent } from './game-information.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GameInformationComponent],
  exports: [GameInformationComponent],
})
export class GameInformationModule {}
