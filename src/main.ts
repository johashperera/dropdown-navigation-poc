/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import 'remixicon/fonts/remixicon.css'


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
