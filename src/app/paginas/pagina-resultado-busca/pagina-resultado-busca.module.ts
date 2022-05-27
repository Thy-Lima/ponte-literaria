import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaResultadoBuscaPageRoutingModule } from './pagina-resultado-busca-routing.module';

import { PaginaResultadoBuscaPage } from './pagina-resultado-busca.page';
import { ResultadosBuscaComponent } from 'src/app/componentes/resultados-busca/resultados-busca.component';
import { ToolbarComponent } from 'src/app/componentes/toolbar/toolbar/toolbar.component';
import { FooterComponent } from 'src/app/componentes/footer/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaResultadoBuscaPageRoutingModule
  ],
  declarations: [PaginaResultadoBuscaPage, ResultadosBuscaComponent, ToolbarComponent, FooterComponent]
})
export class PaginaResultadoBuscaPageModule {}
