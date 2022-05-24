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
}
