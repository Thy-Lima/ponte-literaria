import { Component, OnInit } from '@angular/core';
import { GenerosService } from 'src/app/services/generos/generos.service';

@Component({
  selector: 'app-generos-leitor',
  templateUrl: './generos-leitor.component.html',
  styleUrls: ['./generos-leitor.component.scss'],
})
export class GenerosLeitorComponent implements OnInit {

  constructor() {
    this.preencherListaGeneros();
   }

  public listaGeneros = [];
  
  public preencherListaGeneros() {
    for( let i = 0; i < 8; i++ ){
      this.listaGeneros.push( GenerosService.generosCadastrados[i] );
    }
  }
  
  ngOnInit() {}

}
