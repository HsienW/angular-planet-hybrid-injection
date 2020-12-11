import {Injectable, Injector} from '@angular/core';
import { App1RootService } from '../app1-root/app1-root.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class App1DashboardService extends App1RootService {

  constructor(readonly injector: Injector) {
    super(injector);
  }

  test() {
    this.GetLogAngular1String();
  }

}
