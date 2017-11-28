import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './navComponent/navComponent.component';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

import { CommonModule } from '@angular/common';


// import the WindowRef provider
import { WindowRef } from './WindowRef';
import { CapsFirstLetter } from './pipes/capsFirstLetter.pipe';
/*Bootstrap*/
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CapsFirstLetter
  ],
  imports: [AlertModule.forRoot(),
    BrowserModule,
  Ng2DeviceDetectorModule.forRoot(), CommonModule
  ],
  providers: [WindowRef, CapsFirstLetter],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(public winRef: WindowRef) {
    console.log('Window Variable' + window["browser"]);

  }
}
