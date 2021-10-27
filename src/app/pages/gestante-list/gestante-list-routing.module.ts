import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestanteListPage } from './gestante-list.page';

const routes: Routes = [
  {
    path: '',
    component: GestanteListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestanteListPageRoutingModule {}
