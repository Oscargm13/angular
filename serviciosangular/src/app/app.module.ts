import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CocheService } from './service/coche.service';
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
import { MenuComponent } from './components/menu/menu.component';
import { CocheComponent } from './components/coche/coche.component';
import { DatosPlantillaComponent } from './components/datos-plantilla/datos-plantilla.component';
import { PlantillafuncionmultipleComponent } from './plantillafuncionmultiple/plantillafuncionmultiple.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    LibreriaComponent, 
    PersonasapiComponent, MenuComponent, CocheComponent, DatosPlantillaComponent, PlantillafuncionmultipleComponent, HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PersonasstandaloneComponent,
  ],
  providers: [ServiceComics, ServicePersonas,
    provideHttpClient(), CocheService],
  bootstrap: [AppComponent, MenuComponent]
})
export class AppModule { }
