import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasierPage } from './casier.page';

const routes: Routes = [
  {
    path: '',
    component: CasierPage
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
export class CasierPageRoutingModule {}
