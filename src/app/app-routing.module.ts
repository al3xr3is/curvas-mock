import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gestante-gestacao-form',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: 'configuracoes',
    loadChildren: () => import('./pages/configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'grafico',
    loadChildren: () => import('./pages/grafico/grafico.module').then( m => m.GraficoPageModule)
  },
  {
    path: 'gestante-list',
    loadChildren: () => import('./pages/gestante-list/gestante-list.module').then( m => m.GestanteListPageModule)
  },
  {
    path: 'gestante-form',
    loadChildren: () => import('./pages/gestante-form/gestante-form.module').then( m => m.GestanteFormPageModule)
  },
  {
    path: 'gestante-gestacao-form',
    loadChildren: () => import('./pages/gestante-gestacao-form/gestante-gestacao-form.module').then( m => m.GestanteGestacaoFormPageModule)
  },
  {
    path: 'gestacao-form',
    loadChildren: () => import('./pages/gestacao-form/gestacao-form.module').then( m => m.GestacaoFormPageModule)
  },
  {
    path: 'gestacao-list',
    loadChildren: () => import('./pages/gestacao-list/gestacao-list.module').then( m => m.GestacaoListPageModule)
  },
  {
    path: 'historico-pesagem',
    loadChildren: () => import('./pages/historico-pesagem/historico-pesagem.module').then( m => m.HistoricoPesagemPageModule)
  },
  {
    path: 'pesagem-form',
    loadChildren: () => import('./pages/pesagem-form/pesagem-form.module').then( m => m.PesagemFormPageModule)
  },
  {
    path: 'pesagem-list',
    loadChildren: () => import('./pages/pesagem-list/pesagem-list.module').then( m => m.PesagemListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
