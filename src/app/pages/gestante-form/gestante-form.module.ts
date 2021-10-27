import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestanteFormPageRoutingModule } from './gestante-form-routing.module';

import { GestanteFormPage } from './gestante-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestanteFormPageRoutingModule
  ],
  declarations: [GestanteFormPage]
})
export class GestanteFormPageModule {}
