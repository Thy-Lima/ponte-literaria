import { Injectable } from '@angular/core';
import { GenerosService, modeloGenero } from '../generos/generos.service';

export interface modeloPublicacao {
  idPublicacao: number,
  idAutorPublicacao: number,
  tituloPublicacao: string,
  descricaoPublicacao: string,
  generoPublicacao: modeloGenero,
  faixaEtariaPublicacao: string,
  pesoPublicacao: number,
  qtdPaginasPublicacao: number,
  precoPublicacao: number,
  fotosPublicacao: Object[]
}

@Injectable({
  providedIn: 'root'
})
export class PublicacoesService {

  constructor() { }

  static publicacoesCadastradas: modeloPublicacao[] = [
    { idPublicacao: 1, idAutorPublicacao: 1, tituloPublicacao: 'Harry Potter', descricaoPublicacao: 'Livro de magia', generoPublicacao: GenerosService.generosCadastrados[0], faixaEtariaPublicacao: '12+', pesoPublicacao: 1.25, qtdPaginasPublicacao: 80, precoPublicacao: 150, fotosPublicacao: ['../assets/publicacoes/default/publicacao1.png'] },
    { idPublicacao: 2, idAutorPublicacao: 3, tituloPublicacao: 'Harry Potter', descricaoPublicacao: 'Livro de magia', generoPublicacao: GenerosService.generosCadastrados[1], faixaEtariaPublicacao: '12+', pesoPublicacao: 1.25, qtdPaginasPublicacao: 80, precoPublicacao: 150, fotosPublicacao: ['../assets/publicacoes/default/publicacao4.png'] },
    { idPublicacao: 3, idAutorPublicacao: 4, tituloPublicacao: 'Harry Potter', descricaoPublicacao: 'Livro de magia', generoPublicacao: GenerosService.generosCadastrados[2], faixaEtariaPublicacao: '12+', pesoPublicacao: 1.25, qtdPaginasPublicacao: 80, precoPublicacao: 150, fotosPublicacao: ['../assets/publicacoes/default/publicacao3.png'] },
    { idPublicacao: 4, idAutorPublicacao: 5, tituloPublicacao: 'Harry Potter', descricaoPublicacao: 'Livro de magia', generoPublicacao: GenerosService.generosCadastrados[3], faixaEtariaPublicacao: '12+', pesoPublicacao: 1.25, qtdPaginasPublicacao: 80, precoPublicacao: 150, fotosPublicacao: ['../assets/publicacoes/default/publicacao4.png'] }
  ];
}
