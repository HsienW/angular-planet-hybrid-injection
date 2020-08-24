import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {NgxPlanetModule} from '@worktile/planet';
import {HomeModule} from '../home/home.module';
import {AppRootContext} from '../../../planet-controllers';
import {AppComponent} from './app.component';

// hybrid upgrade lib
import {UpgradeModule} from '@angular/upgrade/static';

// this is lead into Angular1 service
import {Angular1InjectorServiceProvider} from './angular1-injector.service.provider';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    UpgradeModule,
    BrowserModule,
    AppRoutingModule,
    NgxPlanetModule,
    HomeModule
  ],
  providers: [
    Angular1InjectorServiceProvider,
    AppRootContext
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
    // this is load Angular1 module
    if (document.getElementById('angular1-root')) {
      this.upgrade.bootstrap(document.querySelector('#angular1'), ['angular1']);
    }
  }
}
