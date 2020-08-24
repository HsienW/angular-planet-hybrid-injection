import {Component, OnInit} from '@angular/core';
import {App1RootService} from './app1-root.service';

@Component({
    selector: 'app1-root',
    templateUrl: './app1-root.component.html',
    styleUrls: ['./app1-root.component.css']
})
export class App1RootComponent implements OnInit  {

  constructor(
    private app1RootService: App1RootService
  ) {
  }

  ngOnInit() {
  }

  logAngular1String() {
    console.log('app1 root click is work!');
    this.app1RootService.GetLogAngular1String();
  }
}
