import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalGenerosPageRoutingModule } from './modal-generos-routing.module';

import { ModalGenerosPage } from './modal-generos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalGenerosPageRoutingModule
  ],
  declarations: [ModalGenerosPage]
})
export class ModalGenerosPageModule {}
