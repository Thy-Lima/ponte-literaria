import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaAutorPage } from './pagina-autor.page';

const routes: Routes = [
  {
    path: ':id',
    component: PaginaAutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaAutorPageRoutingModule {}
