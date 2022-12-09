import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'lol',
    loadChildren: () =>
      import('./modules/league-of-legends/league-of-legends.module').then(
        (m) => m.LeagueOfLegendsModule
      ),
  },
  {
    path: 'valorant',
    loadChildren: () =>
      import('./modules/valorant/valorant.module').then(
        (m) => m.ValorantModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
