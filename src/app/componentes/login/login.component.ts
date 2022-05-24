import { Component, OnInit } from '@angular/core';
import { AutoresService } from 'src/app/services/autores/autores.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor( public router: Router ) { }

  public emailAutor: string;
  public senhaAutor: string;
  
  public realizarLogin() {
    if( this.emailAutor.trim().length != 0 && this.senhaAutor.trim().length != 0 ){
      for( let usuario of UsuariosService.usuariosCadastrados ){
        if( usuario.emailUsuario == this.emailAutor && usuario.senhaUsuario == this.senhaAutor ){
          UsuariosService.usuarioLogado = usuario;
          
          this.redirecionarPaginaAutor();
          
          break;
        }
      }
    }
  }
  
  public redirecionarPaginaAutor() {
    this.router.navigateByUrl( 'dashboard-autor' );
  }
  
  ngOnInit() {}

}
