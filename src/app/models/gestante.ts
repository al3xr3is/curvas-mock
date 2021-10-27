import { Gestacao } from './gestacao';

export class Gestante {
    codigo: number;
    nome: string;
    nascimento: string;
    gestacao?: Gestacao[];
}
