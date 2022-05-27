import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  constructor( public router: Router ) { }

  public usuarioLogado = UsuariosService.usuarioLogado;
  public itemBuscado: string = '';

  public redirecionarLogin() {
    this.router.navigateByUrl( 'login' );
  }
  
  public redirecionarDashboard( id ){
    if( id == 0 ){
      this.router.navigateByUrl( 'dashboard-autor/0' );
    }
    else if( id == 1 ){
      this.router.navigateByUrl( 'dashboard-autor/1' );
    }
    else if( id == 2 ){
      this.router.navigateByUrl( 'dashboard-autor/2' );
    }
    else if( id == 3 ){
      this.router.navigateByUrl( 'dashboard-autor/3' );
    }
    else if( id == 4 ){
      this.router.navigateByUrl( 'dashboard-autor/4' );
    }
    else if( id == 5 ){
      this.router.navigateByUrl( 'dashboard-autor/5' );
    }
    else if( id == 6 ) {
      UsuariosService.usuarioLogado.idUsuario = 0;
      UsuariosService.usuarioLogado.emailUsuario = '';
      UsuariosService.usuarioLogado.senhaUsuario = '';
      UsuariosService.usuarioLogado.cadastroUsuario = null;


      this.router.navigateByUrl( 'home' );
    }
  }
  
  public redirecionarBusca() {
    this.router.navigateByUrl( 'pagina-resultado-busca/' + this.itemBuscado );
  
  }
  
  ngOnInit() {}

}
