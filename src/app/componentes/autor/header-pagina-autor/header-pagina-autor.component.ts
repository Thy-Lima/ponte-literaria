import { Component, Input, OnInit } from '@angular/core';
import { modeloAutor } from 'src/app/services/autores/autores.service';

@Component({
  selector: 'app-header-pagina-autor',
  templateUrl: './header-pagina-autor.component.html',
  styleUrls: ['./header-pagina-autor.component.scss'],
})
export class HeaderPaginaAutorComponent implements OnInit {

  constructor() { }

  @Input() autor: modeloAutor;
  
  ngOnInit() {}

}
