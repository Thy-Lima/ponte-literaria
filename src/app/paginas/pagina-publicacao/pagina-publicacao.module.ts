import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaPublicacaoPageRoutingModule } from './pagina-publicacao-routing.module';

import { PaginaPublicacaoPage } from './pagina-publicacao.page';
import { ToolbarComponent } from 'src/app/componentes/toolbar/toolbar/toolbar.component';
import { FooterComponent } from 'src/app/componentes/footer/footer/footer.component';
import { PaginaPublicacaoComponent } from 'src/app/componentes/publicacao/pagina-publicacao/pagina-publicacao.component';
import { BannerPublicacaoComponent } from 'src/app/componentes/banner-publicacao/banner-publicacao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaPublicacaoPageRoutingModule
  ],
  declarations: [PaginaPublicacaoPage, ToolbarComponent, FooterComponent, PaginaPublicacaoComponent, BannerPublicacaoComponent]
})
export class PaginaPublicacaoPageModule {}
