import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Ng2BootstrapModule} from "ng2-bootstrap";

import {AppStore} from "angular2-redux-util";


var providing = [{
  provide: AppStore
  // ,
  // useFactory: Lib.StoreFactory({
  //     notify,
  //     appdb,
  //     business,
  //     stations,
  //     reseller,
  //     adnet,
  //     orders
  // })
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule
  ],
  providers: [providing],
  bootstrap: [AppComponent]
})
export class AppModule {
}
