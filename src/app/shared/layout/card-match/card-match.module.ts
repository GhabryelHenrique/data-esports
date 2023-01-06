import { RouterModule } from '@angular/router';
import { CardMatchComponent } from './card-match.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { JwPaginationModule } from 'jw-angular-pagination';
import {ToastModule} from 'primeng/toast';
import {PaginatorModule} from 'primeng/paginator';
@NgModule({
  declarations: [CardMatchComponent],
  exports: [CardMatchComponent],
  imports: [CommonModule, NgxPaginationModule, JwPaginationModule, ToastModule, RouterModule,PaginatorModule  ],
})
export class CardModule {}
