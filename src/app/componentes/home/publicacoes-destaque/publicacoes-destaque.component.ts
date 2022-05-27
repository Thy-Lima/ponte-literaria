import { Component, OnInit } from '@angular/core';
import { PublicacoesService } from 'src/app/services/publicacoes/publicacoes.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-publicacoes-destaque',
  templateUrl: './publicacoes-destaque.component.html',
  styleUrls: ['./publicacoes-destaque.component.scss'],
})
export class PublicacoesDestaqueComponent implements OnInit {

  constructor( public router: Router ) {
    this.preencherPublicacoesDestaque();
   }

  public publicacoesDestaque = [];

  public preencherPublicacoesDestaque() {
    for( let i = 0; i < 4; i++ ){
      this.publicacoesDestaque.push( PublicacoesService.publicacoesCadastradas[i] );
    }
  }
  
  public redirecionarPaginaPublicacao( id ) {
    this.router.navigateByUrl( 'pagina-publicacao/' + id );
  }
  
  ngOnInit() {}

}
