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
    { idAutor: 1, nomeAutor: 'Omar', sobrenomeAutor: 'Viñole', biografiaAutor: "Nascido em Lisboa, Portugal, começou sua carreira no início dos anos 1990, trabalhando em alguns estúdios como desenhista e arte-finalista. Participou da produção e desenvolvimento dos personagens Turma da Xuxinha em 1997. Desenvolve trabalhos com outros desenhistas, tanto em ilustrações quanto em histórias em quadrinhos. Recebeu o Troféu Ângelo Agostini de Melhor arte-finalista em 2003 e em 2015 pelo lançamento de Yeshuah – Onde Tudo Está. Em 2009 recebeu o Troféu HQMIX pela publicação independente Depois da Meia Noite, em parceria com Laudo Ferreira, e em 2017 recebeu o prêmio de arte-finalista pelo seu trabalho em Yeshuah Absoluto, onde participou como arte-finalista do álbum. Em 2018 e 2019 recebeu, também o HQMix, na categoria Publicação Independente de Grupo: Orixás – Em Guerra (2018) e Orixás - Renascimento (2019), participando como colorista.", generosAutor: [GenerosService.generosCadastrados[0]], publicacoesAutor: [PublicacoesService.publicacoesCadastradas[0], PublicacoesService.publicacoesCadastradas[1], PublicacoesService.publicacoesCadastradas[2], PublicacoesService.publicacoesCadastradas[3], PublicacoesService.publicacoesCadastradas[4], PublicacoesService.publicacoesCadastradas[5], PublicacoesService.publicacoesCadastradas[6], PublicacoesService.publicacoesCadastradas[7], PublicacoesService.publicacoesCadastradas[8], PublicacoesService.publicacoesCadastradas[9]], fotoAutor: '../assets/autor/default/autor1.png', capaAutor: '../assets/capa-autor/capa-autor.png', planoAutor: null },
    { idAutor: 2, nomeAutor: 'Laurdo', sobrenomeAutor: 'Ferreira', biografiaAutor: "Roteirista e desenhista, atuante há muitos anos no cenário dos quadrinhos no Brasil, transitando entre o cenário independente e editorial. Ao longo de sua carreira já ganhou vários prêmios da área, como HQMIX e Angelo Agostini, tanto como desenhista ou roteirista, como por seus trabalhos, destacando “Yeshuah Absoluto”, “Cadernos de Viagem” e a minissérie “Depois da meia-noite”. Paralelo à sua carreira nos quadrinhos, trabalha há mais de vinte e cinco anos como ilustrador, desenvolvendo ao longo de todo esse tempo trabalhos para algumas agências de publicidade como Beckerman, Meio & Mensagem, além do mercado editorial, ilustrando revistas como “Sexy”, “Playboy”, “Set”, “Pesca & Cia” e “Alternativa”.", generosAutor: [GenerosService.generosCadastrados[6]], publicacoesAutor: [PublicacoesService.publicacoesCadastradas[10], PublicacoesService.publicacoesCadastradas[11], PublicacoesService.publicacoesCadastradas[12], PublicacoesService.publicacoesCadastradas[13]], fotoAutor: '../assets/autor/default/autor2.png', capaAutor: '../assets/capa-autor/capa-autor.png', planoAutor: null },
    { idAutor: 3, nomeAutor: 'Joel', sobrenomeAutor: 'Lobo', biografiaAutor: "Joel Lobo trabalha com Artes Gráficas desde 1992, ano em que terminou o colegial técnico em Desenho de Comunicação na escola “Carlos de Campos”. Especializou-se em cursos do SENAI “Theobaldo de Nigris” e da “Quanta Academia de Artes”. Cursou Jornalismo na Pontifícia Universidade Católica de São Paulo, PUC-SP, de 1996 a 2000.", generosAutor: [GenerosService.generosCadastrados[1]], publicacoesAutor: [PublicacoesService.publicacoesCadastradas[14]], fotoAutor: '../assets/autor/default/autor3.png', capaAutor: '../assets/capa-autor/capa-autor.png', planoAutor: null },
    { idAutor: 4, nomeAutor: 'Pedro' , sobrenomeAutor: 'Costa', biografiaAutor: 'A biografia do autor aqui', generosAutor: [GenerosService.generosCadastrados[2]], publicacoesAutor: [], fotoAutor: '../assets/autor/default/autor4.png', capaAutor: '../assets/capa-autor/capa-autor.png', planoAutor: null },
    { idAutor: 5, nomeAutor: 'Ana', sobrenomeAutor: 'Carolina', biografiaAutor: 'A biografia do autor aqui', generosAutor: [GenerosService.generosCadastrados[0]], publicacoesAutor: [], fotoAutor: '../assets/autor/default/autor5.png', capaAutor: '../assets/capa-autor/capa-autor.png', planoAutor: null },
  ];
}
