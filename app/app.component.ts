// ROOT COMPONENT FOR APP //

// imports //
// ng imports
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

// custom component/directive imports
import { HeroService } from './hero.service';
import './rxjs-extensions';

/* The imports below are not necessary to run the app, but there was a
   warning in the browser console and all disscussions and documents that I
   found stated that the components had to be mentioned 2X once on import here
   and then in the component.precompile key below which is an [array]. Once I
   did that took care of those warnings. */

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';


@Component({
    selector: 'my-app',
    template: `
      <h1>{{ title }}</h1>
      <nav>
        <a [routerLink]="['/dashboard']" routerLinkActive="active" >Dashboard</a>
        <a [routerLink]="['/heroes']" routerLinkActive="active" >Heroes</a>
      </nav>
      <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
      HeroService
    ],
    precompile: [
      DashboardComponent,
      HeroesComponent,
      HeroDetailComponent
    ]

})

export class AppComponent {
    title = 'Tour of Heroes';
}
