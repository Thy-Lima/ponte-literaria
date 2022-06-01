import { Injectable } from '@angular/core';

export interface modeloLeitor {
  idLeitor: number,
  nomeLeitor: string,
  sobrenomeLeitor: string,
  fotoLeitor: string,
}

@Injectable({
  providedIn: 'root'
})
export class LeitoresService {

  constructor() { }

  static leitoresCadastrados: modeloLeitor[] = [
    { idLeitor: 5, nomeLeitor: 'Mariana', sobrenomeLeitor: 'Ferraz', fotoLeitor: '../assets/avatar/default/person.jpg' }
  ];
}
