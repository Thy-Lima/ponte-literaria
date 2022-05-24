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

  public redirecionarLogin() {
    this.router.navigateByUrl( 'login' );
  }
  
  public usuarioLogado = UsuariosService.usuarioLogado;
  
  verLog() {
    console.log( this.usuarioLogado );
  }
  
  ngOnInit() {}

}
