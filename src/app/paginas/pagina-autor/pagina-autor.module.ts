import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaAutorPageRoutingModule } from './pagina-autor-routing.module';

import { PaginaAutorPage } from './pagina-autor.page';
import { ToolbarComponent } from 'src/app/componentes/toolbar/toolbar/toolbar.component';
import { FooterComponent } from 'src/app/componentes/footer/footer/footer.component';
import { HeaderPaginaAutorComponent } from 'src/app/componentes/autor/header-pagina-autor/header-pagina-autor.component';
import { PublicacoesPaginaAutorComponent } from 'src/app/componentes/autor/publicacoes-pagina-autor/publicacoes-pagina-autor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaAutorPageRoutingModule
  ],
  declarations: [PaginaAutorPage, ToolbarComponent, FooterComponent, HeaderPaginaAutorComponent, PublicacoesPaginaAutorComponent]
})
export class PaginaAutorPageModule {}
