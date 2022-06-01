import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaLeitorPageRoutingModule } from './pagina-leitor-routing.module';

import { PaginaLeitorPage } from './pagina-leitor.page';
import { ToolbarComponent } from 'src/app/componentes/toolbar/toolbar/toolbar.component';
import { FooterComponent } from 'src/app/componentes/footer/footer/footer.component';
import { TemasComponent } from 'src/app/componentes/temas/temas.component';
import { AutoresLeitorComponent } from 'src/app/componentes/leitor/autores-leitor/autores-leitor.component';
import { GenerosLeitorComponent } from 'src/app/componentes/leitor/generos-leitor/generos-leitor.component';
import { PublicacoesDestaqueComponent } from 'src/app/componentes/home/publicacoes-destaque/publicacoes-destaque.component';
import { BannerComponent } from 'src/app/componentes/home/banner/banner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaLeitorPageRoutingModule
  ],
  declarations: [PaginaLeitorPage, ToolbarComponent, FooterComponent, TemasComponent, AutoresLeitorComponent, GenerosLeitorComponent, PublicacoesDestaqueComponent, BannerComponent]
})
export class PaginaLeitorPageModule {}
