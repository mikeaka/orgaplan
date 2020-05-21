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
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('../reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailschantierPageRoutingModule {}
