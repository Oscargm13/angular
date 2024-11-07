import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// import {routing, appRoutingprovider} from

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //routing
  ],
  providers: [
    provideClientHydration(),
    //appRoutingprovider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
