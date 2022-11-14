import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {isPlatform, IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


const getConfig = () => {
  https://ionicframework.com/docs/angular/config
  let plataforma= '' ;

  let config = {
    animated:true,
    hardwareBackButton:true,
    swipeBackEnabled:true,
    rippleEffect: true,
    plataforma
  };

  if (isPlatform('iphone')){
    config = {
      ...config,
      rippleEffect: false,

    }
    console.log(plataforma);
  }
  if (isPlatform('android')){
    config = {
      ...config,
      rippleEffect: true,

    }
    console.log(plataforma);

  }
  if (isPlatform('mobileweb')){
    config = {
      ...config,
      rippleEffect: false,


    }
    console.log(plataforma);
  }





 
  return config;


}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
  IonicModule.forRoot(getConfig()), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
