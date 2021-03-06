// ROOT COMPONENT FOR APP //
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// imports //
// ng imports
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// custom component/directive imports
var hero_service_1 = require('./hero.service');
// Add the RxJS Observable operators we need in this app.
require('./rxjs-operators');
require('./rxjs-extensions');
/* The imports below are not necessary to run the app, but there was a
   warning in the browser console and all disscussions and documents that I
   found stated that the components had to be mentioned 2X once on import here
   and then in the component.precompile key below which is an [array]. Once I
   did that took care of those warnings. */
var dashboard_component_1 = require('./dashboard.component');
var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <h1>{{ title }}</h1>\n      <nav>\n        <a [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\" >Dashboard</a>\n        <a [routerLink]=\"['/heroes']\" routerLinkActive=\"active\" >Heroes</a>\n      </nav>\n      <router-outlet></router-outlet>\n    ",
            styleUrls: ['app/app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                hero_service_1.HeroService
            ],
            precompile: [
                dashboard_component_1.DashboardComponent,
                heroes_component_1.HeroesComponent,
                hero_detail_component_1.HeroDetailComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map