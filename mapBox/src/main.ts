import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


//solo para navegador
if (!navigator.geolocation) {
  alert('Navegador sin geolocation');
  throw new Error('Navegador sin permiso de geolocation');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
