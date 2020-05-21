import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'casier',
    loadChildren: () => import('./equipements/casier/casier.module').then( m => m.CasierPageModule)
  },
  {
    path: 'grue',
    loadChildren: () => import('./equipements/grue/grue.module').then( m => m.GruePageModule)
  },
  {
    path: 'montecharge',
    loadChildren: () => import('./equipements/montecharge/montecharge.module').then( m => m.MontechargePageModule)
  },
  {
    path: 'detailschantier/:name',
    loadChildren: () => import('./detailschantier/detailschantier.module').then( m => m.DetailschantierPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
