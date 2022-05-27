import { Component, OnInit, Input } from '@angular/core';
import { AutoresService } from 'src/app/services/autores/autores.service';
import { PublicacoesService } from 'src/app/services/publicacoes/publicacoes.service';

@Component({
  selector: 'app-resultados-busca',
  templateUrl: './resultados-busca.component.html',
  styleUrls: ['./resultados-busca.component.scss'],
})
export class ResultadosBuscaComponent {

  constructor() {
    this.filtrarPublicacoes();
  }
  
    @Input() itemBuscado;
    public resultadoPublicacoes = [];
    public resultadoAutores = [];

    public filtrarPublicacoes() {
      let str: string = "A caixa do dialogo";

      if( str.includes( "do" ) ) {
        this.resultadoAutores.push( str );
      }
    }

    public filtrarAutores() {
      for( let autor of AutoresService.autoresCadastrados ){
        if( autor.nomeAutor.indexOf( this.itemBuscado) ){
          this.resultadoAutores.push( autor );
        }
      }
    }
    
  }