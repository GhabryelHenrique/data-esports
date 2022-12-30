import { CardMatchComponent } from './card-match.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { JwPaginationModule } from 'jw-angular-pagination';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [CardMatchComponent],
  exports: [CardMatchComponent],
  imports: [CommonModule, NgxPaginationModule, JwPaginationModule, ToastModule],
})
export class CardModule {}
