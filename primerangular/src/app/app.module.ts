import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HooksAngular } from '../components/hooksangular/hooksangular.component';
import { DeportesComponent } from '../components/deportes/deportes.component';


@NgModule({
  declarations: [
    AppComponent,
	HooksAngular,
	DeportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
