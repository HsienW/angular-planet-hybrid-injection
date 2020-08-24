import {Injectable} from '@angular/core';

@Injectable()
export class Angular1InjectorService {

  // I think probably this injector of type is any cause
  constructor(private angular1Injector: any) {
  }

  getService(serviceName: String) {
    return this.angular1Injector.get(serviceName);
  }
}
