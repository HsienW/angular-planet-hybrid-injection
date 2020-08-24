import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgxPlanetModule} from '@worktile/planet';

import {routers} from './app1-root.routing';

import {App1RouterOutletComponent} from './app1-router-outlet.component';
import {App1RootComponent} from './app1-root.component';
import {App1RootService} from './app1-root.service';
import {Angular1InjectorService} from '../../../portal/src/app/angular1-injector.service';


@NgModule({
  declarations: [
    App1RouterOutletComponent,
    App1RootComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers),
    NgxPlanetModule
  ],
  providers: [
    Angular1InjectorService,
    App1RootService
  ],
  entryComponents: [],
  bootstrap: [
    App1RouterOutletComponent
  ]
})
export class App1RootModule {}
