import { Component, OnInit } from '@angular/core';
import { GenerosService } from 'src/app/services/generos/generos.service';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.scss'],
})
export class GenerosComponent implements OnInit {

  constructor() {
    this.preencherListaGeneros();
   }

  public listaGeneros = [];
  
  public preencherListaGeneros() {
    for( let i = 0; i < 10; i++ ){
      this.listaGeneros.push( GenerosService.generosCadastrados[i] );
    }
  }
  
  ngOnInit() {}

}
