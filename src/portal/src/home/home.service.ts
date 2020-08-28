import {AppBaseService} from '../app/app-base.service';
import {Injectable, Injector} from '@angular/core';

@Injectable()
// this extend base service get common function
export class HomeService extends AppBaseService {

  constructor(readonly injector: Injector) {
    super(injector);
  }

  GetLogAngular1String() {
    console.log('portal home get service is work!');
    console.log(this.testGetAngular1String());
  }
}
