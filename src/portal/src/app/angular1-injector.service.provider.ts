import {Angular1InjectorService} from './angular1-injector.service';

export function Angular1InjectorServiceFactory(injector: any) {
  return new Angular1InjectorService(injector);
}

export const Angular1InjectorServiceProvider = {
  provide: Angular1InjectorService,
  useFactory: Angular1InjectorServiceFactory,
  deps: ['$injector']
};
