import { Injectable } from '@angular/core';

export interface modeloGenero {
  tituloGenero: string
}

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor() { }

  static generosCadastrados: modeloGenero[] = [
    { tituloGenero: 'Ação' },
    { tituloGenero: 'Fiçção Científica' },
    { tituloGenero: 'Natureza' },
    { tituloGenero: 'Receitas' },
    { tituloGenero: 'Literatura' },
    { tituloGenero: 'Mangás' },
    { tituloGenero: 'HQ' },
    { tituloGenero: 'Quadrinhos' },
    { tituloGenero: 'Suspense' },
    { tituloGenero: 'Aventura' },
  ];
}
