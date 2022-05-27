import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { modeloAutor } from 'src/app/services/autores/autores.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-dashboard-autor',
  templateUrl: './dashboard-autor.page.html',
  styleUrls: ['./dashboard-autor.page.scss'],
})
export class DashboardAutorPage implements OnInit {

  constructor( public activatedRoute: ActivatedRoute ) {
    this.componenteExibido = + this.activatedRoute.snapshot.paramMap.get('id');
   }

  public componenteExibido: number;
  public autor: modeloAutor = UsuariosService.usuarioLogado.cadastroUsuario;
  
  ngOnInit() {
  }

}
