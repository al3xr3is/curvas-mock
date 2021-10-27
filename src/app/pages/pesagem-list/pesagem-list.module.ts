import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesagemListPageRoutingModule } from './pesagem-list-routing.module';

import { PesagemListPage } from './pesagem-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesagemListPageRoutingModule
  ],
  declarations: [PesagemListPage]
})
export class PesagemListPageModule {}
