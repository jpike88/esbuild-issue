import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'zone.js';
import { AppModule } from './app/app.module';
console.info('f');
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
