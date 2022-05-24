import { Component, OnInit } from '@angular/core';
import { PublicacoesService } from 'src/app/services/publicacoes/publicacoes.service';

@Component({
  selector: 'app-publicacoes-destaque',
  templateUrl: './publicacoes-destaque.component.html',
  styleUrls: ['./publicacoes-destaque.component.scss'],
})
export class PublicacoesDestaqueComponent implements OnInit {

  constructor() {
    this.preencherPublicacoesDestaque();
   }

  public publicacoesDestaque = [];

  public preencherPublicacoesDestaque() {
    for( let i = 0; i < 4; i++ ){
      this.publicacoesDestaque.push( PublicacoesService.publicacoesCadastradas[i] );
    }
  }
  
  ngOnInit() {}

}
