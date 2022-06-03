import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina-autor',
    loadChildren: () => import('./paginas/pagina-autor/pagina-autor.module').then( m => m.PaginaAutorPageModule)
  },
  {
    path: 'pagina-publicacao',
    loadChildren: () => import('./paginas/pagina-publicacao/pagina-publicacao.module').then( m => m.PaginaPublicacaoPageModule)
  },
  {
    path: 'dashboard-autor',
    loadChildren: () => import('./paginas/dashboard-autor/dashboard-autor.module').then( m => m.DashboardAutorPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'modal-generos',
    loadChildren: () => import('./paginas/modal-generos/modal-generos.module').then( m => m.ModalGenerosPageModule)
  },
  {
    path: 'pagina-leitor',
    loadChildren: () => import('./paginas/pagina-leitor/pagina-leitor.module').then( m => m.PaginaLeitorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
