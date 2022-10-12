import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cmp1Component } from '../components/cmp1/cmp1.component';

import { HolaPage } from './hola.page';

const routes: Routes = [
  {
    path: '',
    component: HolaPage,
    children:[
      {
        path:'cmp1',
        component:Cmp1Component
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolaPageRoutingModule {}
