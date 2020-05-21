import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GruePage } from './grue.page';

const routes: Routes = [
  {
    path: '',
    component: GruePage
  },
  {
    path: 'home',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'reservation',
    redirectTo: '/tabs/reservation',
    pathMatch: 'full'
  },
  {
    path: 'settings',
    redirectTo: '/tabs/settings',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GruePageRoutingModule {}
