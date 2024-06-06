import { bootstrapApplication } from '@angular/platform-browser';
import { LoaderComponent } from './app/loader/loader.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(LoaderComponent, config);

export default bootstrap;
