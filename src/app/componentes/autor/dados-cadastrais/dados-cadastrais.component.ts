import { Component, OnInit, Input } from '@angular/core';
import { AutoresService, modeloAutor } from 'src/app/services/autores/autores.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-dados-cadastrais',
  templateUrl: './dados-cadastrais.component.html',
  styleUrls: ['./dados-cadastrais.component.scss'],
})
export class DadosCadastraisComponent implements OnInit {

  constructor() { }

  public autor: modeloAutor = UsuariosService.usuarioLogado.cadastroUsuario;
  
  ngOnInit() {}

}
