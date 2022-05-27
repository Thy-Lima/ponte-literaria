import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-resultado-busca',
  templateUrl: './pagina-resultado-busca.page.html',
  styleUrls: ['./pagina-resultado-busca.page.scss'],
})
export class PaginaResultadoBuscaPage implements OnInit {

  constructor( public activatedRoute: ActivatedRoute ) {
    this.itemBuscado = this.activatedRoute.snapshot.paramMap.get( 'item' )
   }

  public itemBuscado;
  
  ngOnInit() {
  }

}
