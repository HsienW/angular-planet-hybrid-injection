import {Component, OnInit} from '@angular/core';
import {Planet, SwitchModes} from '@worktile/planet';
import {AppRootContext} from '../../../planet-controllers';
import {CustomSettingsService} from './custom-settings.service';
import {Angular1InjectorService} from './angular1-injector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    public appRootContext: AppRootContext,
    public angular1InjectorService: Angular1InjectorService,
    private customSettingsService: CustomSettingsService,
    private planet: Planet
  ) {
  }

  ngOnInit() {
    this.planet.setOptions({
      switchMode: SwitchModes.coexist,
      errorHandler: error => {
        console.log(error);
      }
    });

    this.appRootContext.setName('set root context');

    this.planet.setPortalAppData({
      appRootContext: this.appRootContext,
      angular1InjectorService: this.angular1InjectorService
    });

    const settings = this.customSettingsService.get();

    this.planet.registerApps([
      {
        name: 'app1',
        hostParent: '#app-host-container',
        routerPathPrefix: '/app1',
        selector: 'app1-root-container',
        resourcePathPrefix: '/static/app1/',
        preload: settings.app1.preload,
        switchMode: settings.app1.switchMode,
        loadSerial: true,
        manifest: '/static/app1/manifest.json',
        scripts: [
          'main.js'
        ],
        styles: [
        ],
      }
    ]);

    this.planet.start();
  }
}
