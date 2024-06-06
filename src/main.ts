import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LoaderComponent } from './app/loader/loader.component';

bootstrapApplication(LoaderComponent, appConfig)
  .catch((err) => console.error(err));
