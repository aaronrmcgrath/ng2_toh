// APP //
"use strict";
// imports //
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
// custom component imports - typically imports AppComponent, which holds
// most of the other components
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
// launches the app
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders,
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=app.js.map