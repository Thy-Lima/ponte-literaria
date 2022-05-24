import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardAutorPage } from './dashboard-autor.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardAutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardAutorPageRoutingModule {}
