import { Component, OnInit } from '@angular/core';
import { AutoresService } from 'src/app/services/autores/autores.service';

@Component({
  selector: 'app-autores-destaque',
  templateUrl: './autores-destaque.component.html',
  styleUrls: ['./autores-destaque.component.scss'],
})
export class AutoresDestaqueComponent implements OnInit {

  constructor() {
    this.preencherListaAutores();
   }

  public autoresDestaque = [];

  public preencherListaAutores() {
    for( let i = 0; i < 5; i++ ){
      this.autoresDestaque.push( AutoresService.autoresCadastrados[i] );
    }
  }
  
  ngOnInit() {}

}
