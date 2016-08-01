// APP //

// backend - fake api from memory
// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

// import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryBackendService, SEED_DATA } from '../node_modules/angular2-in-memory-web-api';

import { InMemoryDataService }               from './in-memory-data.service';

// imports //
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

// custom component imports - typically imports AppComponent, which holds
// most of the other components
import { AppComponent }  from './app.component';
import { appRouterProviders } from './app.routes';

// launches the app
bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS
]);
