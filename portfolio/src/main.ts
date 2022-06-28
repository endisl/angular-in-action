import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ConfigService } from './app/services/config.service';
import { environment } from './environments/environment';

ConfigService.set('api', 'https://angular-in-action-portfolio.firebaseio.com/stocks.json');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
