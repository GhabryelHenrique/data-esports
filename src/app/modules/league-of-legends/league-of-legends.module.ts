import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LiveModule } from '../../shared/live/live.module';
import { LeagueOflegendsRoutingModule } from './league-of-legends-routing.module';
import { LeagueOfLegendsComponent } from './league-of-legends.component';

@NgModule({
  imports: [CommonModule, LeagueOflegendsRoutingModule, LiveModule],
  declarations: [LeagueOfLegendsComponent],
})
export class LeagueOfLegendsModule {}
