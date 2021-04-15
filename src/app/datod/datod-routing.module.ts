import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatodPage } from './datod.page';

const routes: Routes = [
  {
    path: '',
    component: DatodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatodPageRoutingModule {}
