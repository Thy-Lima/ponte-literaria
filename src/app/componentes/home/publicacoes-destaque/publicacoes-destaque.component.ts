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
    this.preencherPublicacoesDestaque2();
    this.preencherPublicacoesDestaque3();
   }

  public publicacoesDestaque = [];
  public publicacoesDestaque2 = [];
  public publicacoesDestaque3 = [];

  public preencherPublicacoesDestaque() {
    for( let i = 0; i < 5; i++ ){
      this.publicacoesDestaque.push( PublicacoesService.publicacoesCadastradas[i] );
    }
  }

  public preencherPublicacoesDestaque2() {
    for( let i = 5; i < 10; i++ ){
      this.publicacoesDestaque2.push( PublicacoesService.publicacoesCadastradas[i] );
    }
  }

  public preencherPublicacoesDestaque3() {
    for( let i = 10; i < 15; i++ ){
      this.publicacoesDestaque3.push( PublicacoesService.publicacoesCadastradas[i] );
    }
  }
  
  public redirecionarPaginaPublicacao( id ) {
    this.router.navigateByUrl( 'pagina-publicacao/' + id );
  }
  
  ngOnInit() {}

}
