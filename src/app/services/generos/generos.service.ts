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
    { tituloGenero: 'Ação e Aventura' },
    { tituloGenero: 'Autoajuda' },
    { tituloGenero: 'Fantasia' },
    { tituloGenero: 'Ficção científica' },
    { tituloGenero: 'Ficção literária' },
    { tituloGenero: 'Humanidades' },
    { tituloGenero: 'Mistério' },
    { tituloGenero: 'Quadrinhos' },
    { tituloGenero: 'Romance' },
    { tituloGenero: 'Tecnologia' },
  ];
}
