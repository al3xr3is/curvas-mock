import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoPesagemPage } from './historico-pesagem.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoPesagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoPesagemPageRoutingModule {}
