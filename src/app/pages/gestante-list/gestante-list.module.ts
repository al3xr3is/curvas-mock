import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestanteListPageRoutingModule } from './gestante-list-routing.module';

import { GestanteListPage } from './gestante-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestanteListPageRoutingModule
  ],
  declarations: [GestanteListPage]
})
export class GestanteListPageModule {}
