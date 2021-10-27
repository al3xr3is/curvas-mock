import { Injectable } from '@angular/core';
import { Gestante } from 'src/app/models/gestante';
import { Gestacao } from 'src/app/models/gestacao';
import { Pesagem } from 'src/app/models/pesagem';
import { gestantes } from './mockDatabase';


@Injectable({
  providedIn: 'root'
})
export class MockService {

  gestante: Gestante[];
  gestacao: Gestacao[];
  pesage: Pesagem[];

  constructor() {
  }

  async getGestantes() {
    return gestantes;
  }
}
