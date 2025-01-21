import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadgestPage } from './badgest.page';

const routes: Routes = [
  {
    path: '',
    component: BadgestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgestPageRoutingModule {}
