import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
{
  path: 'tabs',
  component: TabsPage,
  children: [
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
    {
      path: '',
      redirectTo: '/tabs/home',
      pathMatch: 'full'
    }
  ]
},
{
  path: '',
  redirectTo: '/tabs/home',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
