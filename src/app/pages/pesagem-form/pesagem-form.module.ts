import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesagemFormPageRoutingModule } from './pesagem-form-routing.module';

import { PesagemFormPage } from './pesagem-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesagemFormPageRoutingModule
  ],
  declarations: [PesagemFormPage]
})
export class PesagemFormPageModule {}
