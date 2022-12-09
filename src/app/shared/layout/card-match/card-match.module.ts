import { CardMatchComponent } from './card-match.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [CardMatchComponent],
  exports: [CardMatchComponent],
  imports: [CommonModule, NgxPaginationModule],
})
export class CardModule {}
