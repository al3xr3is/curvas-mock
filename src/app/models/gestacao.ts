import { Pesagem } from './pesagem';

export class Gestacao {
    codigo: number;
    codigoGestante: number;
    inicio: string;
    pesoInicial: number;
    alturaInicial: number;
    pesagem?: Pesagem[];
}
