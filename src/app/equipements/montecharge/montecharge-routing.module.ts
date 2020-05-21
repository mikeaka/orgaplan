import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MontechargePage } from './montecharge.page';

const routes: Routes = [
  {
    path: '',
    component: MontechargePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MontechargePageRoutingModule {}
