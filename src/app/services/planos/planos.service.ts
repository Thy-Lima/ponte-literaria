import { Injectable } from '@angular/core';

export interface modeloPlano {
  tipoPlano: any
}

export interface planoFree {
  mensalidade: 0,
  porcentagemSobreVenda: 20,
  newsletter: false,
  destaque: false,
  topResultados: false
}

export interface planoBasic {
  mensalidade: 50,
  porcentagemSobreVenda: 10,
  newsletter: true,
  destaque: false,
  topResultados: false
}

export interface planoStandard {
  mensalidade: 100,
  porcentagemSobreVenda: 10,
  newsletter: true,
  destaque: true,
  topResultados: false
}

export interface planoPremium {
  mensalidade: 200,
  porcentagemSobreVenda: 10,
  newsletter: true,
  destaque: true,
  topResultados: true
}

@Injectable({
  providedIn: 'root'
})
export class PlanosService {

  constructor() { }
}
