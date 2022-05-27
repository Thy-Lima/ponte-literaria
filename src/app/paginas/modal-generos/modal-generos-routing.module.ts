import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalGenerosPage } from './modal-generos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalGenerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalGenerosPageRoutingModule {}
