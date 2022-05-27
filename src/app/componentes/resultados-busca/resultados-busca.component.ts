import { Component, OnInit, Input } from '@angular/core';
import { AutoresService } from 'src/app/services/autores/autores.service';
import { PublicacoesService } from 'src/app/services/publicacoes/publicacoes.service';

@Component({
  selector: 'app-resultados-busca',
  templateUrl: './resultados-busca.component.html',
  styleUrls: ['./resultados-busca.component.scss'],
})
export class ResultadosBuscaComponent implements OnInit {

  constructor() {}
  
    @Input() itemBuscado;
    public resultadoPublicacoes;

    public filtrarPublicacoes() {
      let texto = [
        { desc: 'Harry Potter' },
        { desc: 'Spiderwick' }
      ];

      this.resultadoPublicacoes = texto.filter( item => {
        item.desc.indexOf( "Harry" ) > -1;
      } )
    }

    ngOnInit() {
      this.filtrarPublicacoes();
    }
  
  }