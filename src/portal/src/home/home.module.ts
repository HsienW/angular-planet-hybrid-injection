import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {HomeService} from './home.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    HomeService
  ],
  entryComponents: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
