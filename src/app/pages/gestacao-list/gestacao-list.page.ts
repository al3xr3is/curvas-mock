import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MockService } from 'src/app/core/service/mock.service';
import { Gestante } from 'src/app/models/gestante';

@Component({
  selector: 'app-gestacao-list',
  templateUrl: './gestacao-list.page.html',
  styleUrls: ['./gestacao-list.page.scss'],
})
export class GestacaoListPage implements OnInit {
  title = 'Gestações';

  gestantes: Gestante[];

  constructor(
    private navCtrl: NavController,
    private mockService: MockService
  ) { }

  ngOnInit() {
  }
}
