import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestacaoFormPage } from './gestacao-form.page';

const routes: Routes = [
  {
    path: '',
    component: GestacaoFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestacaoFormPageRoutingModule {}
