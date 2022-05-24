import { Component, Input, OnInit } from '@angular/core';
import { GenerosService, modeloGenero } from 'src/app/services/generos/generos.service';
import { modeloPublicacao, PublicacoesService } from 'src/app/services/publicacoes/publicacoes.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-generos',
  templateUrl: './modal-generos.component.html',
  styleUrls: ['./modal-generos.component.scss'],
})
export class ModalGenerosComponent implements OnInit {

  constructor( public modalCtrl: ModalController) {
    this.listaGeneros = GenerosService.generosCadastrados;
   }

  @Input() novaPublicacao: modeloPublicacao;
  public listaGeneros = [];
  
  public confirmarGenero( genero: modeloGenero ){
    this.novaPublicacao.generoPublicacao = genero;
  
    this.modalCtrl.dismiss();
  }
  
  verLog() {
    console.log( this.listaGeneros );
  }
  
  ngOnInit() {}

}
