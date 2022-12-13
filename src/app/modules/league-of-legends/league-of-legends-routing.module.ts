import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeagueOfLegendsComponent } from './league-of-legends.component';

const routes: Routes = [
  { path: '', component: LeagueOfLegendsComponent },
  {
    path: 'matches',
    loadChildren: () =>
      import('./modules/lol-matches/lol-matches.module').then(
        (m) => m.LolMatchesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeagueOflegendsRoutingModule {}
