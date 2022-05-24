import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoresService, modeloAutor } from 'src/app/services/autores/autores.service';
import { modeloPlano } from 'src/app/services/planos/planos.service';
import { modeloPublicacao, PublicacoesService } from 'src/app/services/publicacoes/publicacoes.service';

@Component({
  selector: 'app-pagina-publicacao',
  templateUrl: './pagina-publicacao.page.html',
  styleUrls: ['./pagina-publicacao.page.scss'],
})
export class PaginaPublicacaoPage implements OnInit {

  constructor( public activatedRoute: ActivatedRoute ) {
    this.idPublicacao = + this.activatedRoute.snapshot.paramMap.get('id');
    this.getPublicacao( this.idPublicacao );
   }

   public idPublicacao: number;
   public publicacao: modeloPublicacao;
   public autorPublicacao: modeloAutor;

   public getPublicacao( idPublicacao: number ) {
     for( let publicacao of PublicacoesService.publicacoesCadastradas ){
       if( publicacao.idPublicacao == this.idPublicacao ){
         this.publicacao = publicacao;
         break;
       }
     }

     for( let autor of AutoresService.autoresCadastrados ){
       if( this.publicacao.idAutorPublicacao == autor.idAutor ){
         this.autorPublicacao = autor;
         break;
       }
     }
   }

  ngOnInit() {
  }

}
