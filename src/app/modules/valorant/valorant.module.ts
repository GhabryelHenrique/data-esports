import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValorantComponent } from './valorant.component';

const routes: Routes = [
  {
    path: 'matches',
    loadChildren: () =>
      import('./pages/valorant-matches.module').then(
        (m) => m.ValorantMatchesModule
      ),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ValorantComponent],
})
export class ValorantModule {}
