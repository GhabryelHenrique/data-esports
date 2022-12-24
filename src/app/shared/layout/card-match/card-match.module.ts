import { CardMatchComponent } from './card-match.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [CardMatchComponent],
  exports: [CardMatchComponent],
  imports: [CommonModule, NgxPaginationModule, JwPaginationModule],
})
export class CardModule {}
