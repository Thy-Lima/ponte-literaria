import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalGenerosPage } from 'src/app/paginas/modal-generos/modal-generos.page';
import { modeloPublicacao, PublicacoesService } from 'src/app/services/publicacoes/publicacoes.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nova-publicacao',
  templateUrl: './nova-publicacao.component.html',
  styleUrls: ['./nova-publicacao.component.scss'],
})
export class NovaPublicacaoComponent implements OnInit {

  constructor( public modalCtrl: ModalController, public router: Router ) { }

  public novaPublicacao: modeloPublicacao = {
    idPublicacao: 6,
  idAutorPublicacao: 1,
  tituloPublicacao: '',
  descricaoPublicacao: '',
  generoPublicacao: null,
  faixaEtariaPublicacao: '',
  pesoPublicacao: 0,
  qtdPaginasPublicacao: 0,
  precoPublicacao: 0,
  fotosPublicacao: []
  };
  
  public imagePath;
  public imageUrl;
  
  public preview( files, event ){
    let reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL( files[0] );
      reader.onload = (event) => {
        this.imageUrl = reader.result;
        this.novaPublicacao.fotosPublicacao.push( this.imageUrl );
      }
  }
    
  public async abrirModalGeneros() {
    const modal = await this.modalCtrl.create({
      component: ModalGenerosPage,
      componentProps: {
        'novaPublicacao': this.novaPublicacao
      }
    });

    return await modal.present();
  }
  
  public salvarNovaPublicacao() {
    PublicacoesService.publicacoesCadastradas.push( this.novaPublicacao );
    
    this.router.navigateByUrl( 'dashboard-autor/0' );
  }
  
  ngOnInit() {}

}
