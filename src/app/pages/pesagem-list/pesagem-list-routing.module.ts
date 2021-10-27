import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesagemListPage } from './pesagem-list.page';

const routes: Routes = [
  {
    path: '',
    component: PesagemListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesagemListPageRoutingModule {}
