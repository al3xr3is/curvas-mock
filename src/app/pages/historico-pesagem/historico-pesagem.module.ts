import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoPesagemPageRoutingModule } from './historico-pesagem-routing.module';

import { HistoricoPesagemPage } from './historico-pesagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoPesagemPageRoutingModule
  ],
  declarations: [HistoricoPesagemPage]
})
export class HistoricoPesagemPageModule {}
