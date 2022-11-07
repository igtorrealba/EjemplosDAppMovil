import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {isPlatform,  IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



const getConfig = () => {
  
  if (isPlatform('hybrid')){
    return{
      backButtonText: 'Previous',
      tabButtonLayout: 'label-hide'

    }
  }

  return{
    menuIcon:'elipsis-verical'
  }

  if (isPlatform("android")){
    return{
      rippleEffect:false,
      mode:'md'
  
    }
  
  
  }
}





@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(getConfig()), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
