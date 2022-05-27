import { Component, Input, OnInit } from '@angular/core';
import { modeloAutor } from 'src/app/services/autores/autores.service';
import { modeloPublicacao } from 'src/app/services/publicacoes/publicacoes.service';
import { modeloUsuario, UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-pagina-publicacao-venda',
  templateUrl: './pagina-publicacao.component.html',
  styleUrls: ['./pagina-publicacao.component.scss'],
})
export class PaginaPublicacaoComponent implements OnInit {

  constructor() {
    this.usuarioLogado = UsuariosService.usuarioLogado;
   }

  public usuarioLogado: modeloUsuario;
  @Input() publicacao: modeloPublicacao;
  @Input() autorPublicacao: modeloAutor;
  
  ngOnInit() {}

}
