import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Cmp1Component } from '../components/cmp1/cmp1.component';
import { Cmp2Component } from '../components/cmp2/cmp2.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
    
  ],
  declarations: [HomePage,Cmp1Component, Cmp2Component]
  
})
export class HomePageModule {}
