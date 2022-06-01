import { Component, OnInit } from '@angular/core';
import { AutoresService } from 'src/app/services/autores/autores.service';

@Component({
  selector: 'app-autores-leitor',
  templateUrl: './autores-leitor.component.html',
  styleUrls: ['./autores-leitor.component.scss'],
})
export class AutoresLeitorComponent implements OnInit {

  constructor() {
    this.preencherListaAutores();
   }

  public autoresDestaque = [];

  public preencherListaAutores() {
    for( let i = 0; i < 3; i++ ){
      this.autoresDestaque.push( AutoresService.autoresCadastrados[i] );
    }
  }
  
  ngOnInit() {}

}
