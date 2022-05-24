import { Component, OnInit } from '@angular/core';
import { AutoresService, modeloAutor } from 'src/app/services/autores/autores.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-autor',
  templateUrl: './pagina-autor.page.html',
  styleUrls: ['./pagina-autor.page.scss'],
})
export class PaginaAutorPage implements OnInit {

  constructor( public activatedRoute: ActivatedRoute ) {
    this.idAutor = + this.activatedRoute.snapshot.paramMap.get('id');
    this.getAutor( this.idAutor );
  }

  public idAutor: number;
  public autor: modeloAutor;

  public getAutor( idAutor: number ){
    for( let autor of AutoresService.autoresCadastrados ){
      if( autor.idAutor == this.idAutor ){
        this.autor = autor;
        break;
      }
    }
  }
  
  ngOnInit() {
  }

}
