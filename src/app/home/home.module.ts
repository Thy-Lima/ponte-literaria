import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


import { ToolbarComponent } from '../componentes/toolbar/toolbar/toolbar.component';
import { FooterComponent } from '../componentes/footer/footer/footer.component';
import { BannerComponent } from '../componentes/home/banner/banner.component';
import { GenerosComponent } from '../componentes/home/generos/generos.component';
import { AutoresDestaqueComponent } from '../componentes/home/autores-destaque/autores-destaque.component';
import { PublicacoesDestaqueComponent } from '../componentes/home/publicacoes-destaque/publicacoes-destaque.component';
import { TemasComponent } from '../componentes/temas/temas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ToolbarComponent, FooterComponent, BannerComponent, GenerosComponent, AutoresDestaqueComponent, PublicacoesDestaqueComponent, TemasComponent]
})
export class HomePageModule {}
