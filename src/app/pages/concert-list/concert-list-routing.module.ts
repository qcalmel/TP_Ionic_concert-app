import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcertListPage } from './concert-list.page';

const routes: Routes = [
  {
    path: '',
    component: ConcertListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcertListPageRoutingModule {}
