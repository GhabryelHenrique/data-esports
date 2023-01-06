import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LolMatchesComponent } from './lol-matches.component';
import { LolMatchesHistoryComponent } from './pages/lol-matches-history/lol-matches-history.component';
import { LolMatchesLiveComponent } from './pages/lol-matches-live/lol-matches-live.component';

const routes: Routes = [
  { path: '', component: LolMatchesComponent },
  {
    path: 'live/:id',
    component: LolMatchesLiveComponent,
  },
  {
    path: 'history/:id',
    component: LolMatchesLiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoLMatchesRoutingModule {}
