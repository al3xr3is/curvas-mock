import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestacaoFormPageRoutingModule } from './gestacao-form-routing.module';

import { GestacaoFormPage } from './gestacao-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestacaoFormPageRoutingModule
  ],
  declarations: [GestacaoFormPage]
})
export class GestacaoFormPageModule {}
