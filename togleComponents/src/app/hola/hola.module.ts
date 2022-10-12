import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HolaPageRoutingModule } from './hola-routing.module';

import { HolaPage } from './hola.page';
import { Cmp1Component } from '../components/cmp1/cmp1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HolaPageRoutingModule
  ],
  declarations: [HolaPage,Cmp1Component]
})
export class HolaPageModule {}
