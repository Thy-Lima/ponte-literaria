import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaLeitorPage } from './pagina-leitor.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaLeitorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaLeitorPageRoutingModule {}
