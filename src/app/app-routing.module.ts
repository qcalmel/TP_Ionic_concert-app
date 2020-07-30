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
    path: 'concert-list',
    loadChildren: () => import('./pages/concert-list/concert-list.module').then( m => m.ConcertListPageModule)
  },
  {
    path: 'concert-add',
    loadChildren: () => import('./pages/concert-add/concert-add.module').then( m => m.ConcertAddPageModule)
  },
  {
    path: 'concert-add/:id',
    loadChildren: () => import('./pages/concert-add/concert-add.module').then( m => m.ConcertAddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
