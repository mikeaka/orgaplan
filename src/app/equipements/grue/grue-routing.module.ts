import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GruePage } from './grue.page';

const routes: Routes = [
  {
    path: '',
    component: GruePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GruePageRoutingModule {}
