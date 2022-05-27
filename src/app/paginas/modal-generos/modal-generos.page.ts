import { Component, Input, OnInit } from '@angular/core';
import { GenerosService, modeloGenero } from 'src/app/services/generos/generos.service';
import { modeloPublicacao } from 'src/app/services/publicacoes/publicacoes.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-generos',
  templateUrl: './modal-generos.page.html',
  styleUrls: ['./modal-generos.page.scss'],
})
export class ModalGenerosPage implements OnInit {

  constructor( public modalCtrl: ModalController ) { }

  @Input() novaPublicacao: modeloPublicacao;
  public listaGeneros = GenerosService.generosCadastrados;
  
  public selecionarGenero( genero: modeloGenero ){
    this.novaPublicacao.generoPublicacao = genero;
  
    this.modalCtrl.dismiss();
  }
  
  ngOnInit() {
  }

}
