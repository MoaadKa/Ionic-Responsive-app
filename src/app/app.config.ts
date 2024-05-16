import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { routes } from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideIonicAngular({}), 
    provideIonicAngular({}),
    importProvidersFrom(IonicModule.forRoot({ mode: 'ios' }),
  HttpClientModule)
  ],
  
};
