import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestacaoListPage } from './gestacao-list.page';

const routes: Routes = [
  {
    path: '',
    component: GestacaoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestacaoListPageRoutingModule {}
