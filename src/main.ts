import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { SharitAppComponent } from './app/';



if (environment.production) {
  enableProdMode();
}

bootstrap(SharitAppComponent);