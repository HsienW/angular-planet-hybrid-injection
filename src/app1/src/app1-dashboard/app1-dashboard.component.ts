import {Component, OnInit} from '@angular/core';
import {App1DashboardService} from './app1-dashboard.service';

@Component({
  selector: 'app1-dashboard',
  templateUrl: './app1-dashboard.component.html',
  styleUrls: ['./app1-dashboard.component.css']
})
export class App1DashboardComponent implements OnInit {

  constructor(
    private app1DashboardService: App1DashboardService,
  ) {
  }

  ngOnInit() {
    this.app1DashboardService.test();
  }

  sayHello() {
    alert('Hello, I am app1 dashboard');
  }

}
