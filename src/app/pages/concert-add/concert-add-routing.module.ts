import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcertAddPage } from './concert-add.page';

const routes: Routes = [
  {
    path: '',
    component: ConcertAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcertAddPageRoutingModule {}
