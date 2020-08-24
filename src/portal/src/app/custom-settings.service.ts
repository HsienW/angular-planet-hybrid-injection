import {Injectable} from '@angular/core';
import {cache} from '../../../planet-controllers';
import {SwitchModes} from '@worktile/planet';

const SETTINGS_KEY = 'custom-settings';

export interface CustomSettingsInfo {
  app1: {
    preload: boolean;
    switchMode?: SwitchModes;
  };
}

const DEFAULT_SETTINGS: CustomSettingsInfo = {
  app1: {
    preload: true,
    switchMode: SwitchModes.coexist
  }
};

@Injectable({
  providedIn: 'root'
})
export class CustomSettingsService {
  get(): CustomSettingsInfo {
    const settings = cache.get<CustomSettingsInfo>(SETTINGS_KEY);
    return settings || JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
  }

  save(settings: CustomSettingsInfo) {
    cache.set<CustomSettingsInfo>(SETTINGS_KEY, settings);
  }

  restore() {
    cache.set<CustomSettingsInfo>(SETTINGS_KEY, DEFAULT_SETTINGS);
  }
}