import { LiveComponent } from './../live/live.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../layout/card-match/card-match.module';

@NgModule({
  declarations: [LiveComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    LiveComponent,
  ]
})
export class LiveModule { }
