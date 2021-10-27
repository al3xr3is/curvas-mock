import { Component, OnInit } from '@angular/core';
import { Gestante } from '../../models/gestante';
import { Gestacao } from '../../models/gestacao';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-gestante-gestacao-form',
  templateUrl: './gestante-gestacao-form.page.html',
  styleUrls: ['./gestante-gestacao-form.page.scss'],
})
export class GestanteGestacaoFormPage implements OnInit {
  title = 'Nova Gestante';

  gestante: Gestante;
  gestacao: Gestacao;

  constructor(
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.gestante = new Gestante();
    this.gestacao = new Gestacao();
  }

  async onSubmit() {
    const toast = await this.toastCtrl.create({
      header: 'Sucesso!',
      message: 'Gestante salva com sucesso.',
      color: 'success',
      position: 'bottom',
      duration: 2000
    });

    toast.present();
    this.navCtrl.navigateForward('gestacao-list');
  }

}
