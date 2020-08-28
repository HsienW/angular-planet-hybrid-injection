import {AppBaseService} from '../../../portal/src/app/app-base.service';
import {Injectable, Injector} from '@angular/core';

@Injectable()
export class App1RootService extends AppBaseService {

  constructor(readonly injector: Injector) {
    super(injector);
  }

  GetLogAngular1String() {
    console.log('app1 root service is work!');
    console.log(this.testGetAngular1String());
  }
}
