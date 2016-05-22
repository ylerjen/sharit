import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { NewsListComponent } from './app/+news-list';



if (environment.production) {
  enableProdMode();
}

bootstrap(NewsListComponent);