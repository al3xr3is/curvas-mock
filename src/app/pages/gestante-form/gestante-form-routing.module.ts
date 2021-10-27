import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestanteFormPage } from './gestante-form.page';

const routes: Routes = [
  {
    path: '',
    component: GestanteFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestanteFormPageRoutingModule {}
