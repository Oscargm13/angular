import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { FormsModule } from '@angular/forms';
import { ServiceComics } from './services/service.comics';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { PersonasstandaloneComponent } from './components/personasstandalone/personasstandalone.component';
import { NgFor, NgIf } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    LibreriaComponent, 
    PersonasapiComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PersonasstandaloneComponent,
  ],
  providers: [ServiceComics, ServicePersonas, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
