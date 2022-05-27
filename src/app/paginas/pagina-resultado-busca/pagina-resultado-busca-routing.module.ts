import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaResultadoBuscaPage } from './pagina-resultado-busca.page';

const routes: Routes = [
  {
    path: ':item',
    component: PaginaResultadoBuscaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaResultadoBuscaPageRoutingModule {}
