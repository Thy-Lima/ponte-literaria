import { Component, Input, OnInit } from '@angular/core';
import { modeloAutor } from 'src/app/services/autores/autores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicacoes-pagina-autor',
  templateUrl: './publicacoes-pagina-autor.component.html',
  styleUrls: ['./publicacoes-pagina-autor.component.scss'],
})
export class PublicacoesPaginaAutorComponent implements OnInit {

  constructor( public router: Router ) { }

  @Input() autor: modeloAutor;
  
  public redirecionarPaginaPublicacao( idPublicacao: number ) {
    this.router.navigateByUrl( 'pagina-publicacao/' + idPublicacao );
  }
  
  ngOnInit() {}

}
