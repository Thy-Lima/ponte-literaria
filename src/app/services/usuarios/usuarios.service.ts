import { Injectable } from '@angular/core';
import { AutoresService } from '../autores/autores.service';

export interface modeloUsuario {
  idUsuario: number,
  emailUsuario: string,
  senhaUsuario: string,
  cadastroUsuario: any
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  static usuarioLogado: modeloUsuario = {
    idUsuario: 0,
    emailUsuario: '',
    senhaUsuario: '',
    cadastroUsuario: null
  };

  static usuariosCadastrados: modeloUsuario[] = [
    { idUsuario: 1, emailUsuario: 'autor@gmail.com', senhaUsuario: '123456', cadastroUsuario: AutoresService.autoresCadastrados[0] },
    { idUsuario: 2, emailUsuario: 'leitor@gmail.com', senhaUsuario: '123456', cadastroUsuario: null }
  ];
}
