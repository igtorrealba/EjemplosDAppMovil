import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

import { Cmp1Component } from '../components/cmp1/cmp1.component';
import { Cmp2Component } from '../components/cmp2/cmp2.component';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'cmp1',
        component: Cmp1Component
      },
      {
        path:'cmp2',
        component: Cmp2Component
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
