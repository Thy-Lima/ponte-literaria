import { Injectable } from '@angular/core';
import { NgModelGroup } from '@angular/forms';
import { PublicacoesDestaqueComponent } from 'src/app/componentes/home/publicacoes-destaque/publicacoes-destaque.component';
import { GenerosService, modeloGenero } from '../generos/generos.service';
import { modeloPlano } from '../planos/planos.service';
import { modeloPublicacao, PublicacoesService } from '../publicacoes/publicacoes.service';

export interface modeloAutor {
  idAutor: number,
  nomeAutor: string,
  sobrenomeAutor: string,
  biografiaAutor: string,
  generosAutor: modeloGenero[],
  publicacoesAutor: modeloPublicacao[],
  fotoAutor: string,
  capaAutor: string,
  planoAutor: modeloPlano
}

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor() { }

  static autoresCadastrados: modeloAutor[] = [
    { idAutor: 1, nomeAutor: 'Carlos', sobrenomeAutor: 'Reis', biografiaAutor: 'A biografia do autor aqui', generosAutor: [GenerosService.generosCadastrados[0]], publicacoesAutor: [PublicacoesService.publicacoesCadastradas[0]], fotoAutor: '../assets/autor/default/autor1.jpg', capaAutor: '../assets/banners/banner1.jpg', planoAutor: null },
    { idAutor: 2, nomeAutor: 'Jose', sobrenomeAutor: 'Fernandes', biografiaAutor: 'A biografia do autor aqui', generosAutor: [GenerosService.generosCadastrados[6]], publicacoesAutor: null, fotoAutor: '../assets/autor/default/autor2.jpg', capaAutor: '../assets/banners/banner2.jpg', planoAutor: null },
    { idAutor: 3, nomeAutor: 'Paula', sobrenomeAutor: 'Ramos', biografiaAutor: 'A biografia do autor aqui', generosAutor: [GenerosService.generosCadastrados[1]], publicacoesAutor: [PublicacoesService.publicacoesCadastradas[1]], fotoAutor: '../assets/autor/default/autor3.jpg', capaAutor: '../assets/banners/banner3.jpg', planoAutor: null },
    { idAutor: 4, nomeAutor: 'Marcelo', sobrenomeAutor: 'Freitas', biografiaAutor: 'A biografia do autor aqui', generosAutor: [GenerosService.generosCadastrados[2]], publicacoesAutor: [PublicacoesService.publicacoesCadastradas[2]], fotoAutor: '../assets/autor/default/autor4.jpg', capaAutor: '../assets/banners/banner1.jpg', planoAutor: null },
    { idAutor: 5, nomeAutor: 'Ana', sobrenomeAutor: 'Mikado', biografiaAutor: 'A biografia do autor aqui', generosAutor: [GenerosService.generosCadastrados[0]], publicacoesAutor: [PublicacoesService.publicacoesCadastradas[3]], fotoAutor: '../assets/autor/default/autor5.jpg', capaAutor: '../assets/banners/banner2.jpg', planoAutor: null },
  ];
}
