import {Injectable, Injector} from '@angular/core';
import {Angular1InjectorService} from './angular1-injector.service';

@Injectable()
export class AppBaseService {

  readonly angular1InjectorService: Angular1InjectorService;
  readonly testService: any;

  constructor(readonly injector: Injector) {
    this.angular1InjectorService = this.injector.get(Angular1InjectorService);
    this.testService = this.angular1InjectorService.getService('Angular1ExportService');
  }

  testGetAngular1String() {
    console.log('app base service is work!');
    return this.testService.outPutAngular1String();
  }
}
