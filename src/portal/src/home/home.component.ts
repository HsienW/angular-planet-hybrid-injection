import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private homeService: HomeService,
  ) {
  }

  ngOnInit() {
  }

  logAngular1String() {
    console.log('portal home click is work!');
    this.homeService.GetLogAngular1String();
  }

}
