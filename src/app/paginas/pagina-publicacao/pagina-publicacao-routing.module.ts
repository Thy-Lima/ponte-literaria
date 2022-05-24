import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaPublicacaoPage } from './pagina-publicacao.page';

const routes: Routes = [
  {
    path: ':id',
    component: PaginaPublicacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaPublicacaoPageRoutingModule {}
