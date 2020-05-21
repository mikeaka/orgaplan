import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailschantierPage } from './detailschantier.page';

const routes: Routes = [
  {
    path: '',
    component: DetailschantierPage
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
export class DetailschantierPageRoutingModule {}
