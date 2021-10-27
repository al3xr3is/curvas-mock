import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestanteGestacaoFormPageRoutingModule } from './gestante-gestacao-form-routing.module';

import { GestanteGestacaoFormPage } from './gestante-gestacao-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestanteGestacaoFormPageRoutingModule
  ],
  declarations: [GestanteGestacaoFormPage]
})
export class GestanteGestacaoFormPageModule {}
