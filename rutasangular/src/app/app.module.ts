import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProvider } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MusicaComponent } from './components/musica/musica.component';
import { CineComponent } from './components/cine/cine.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NumerodobleComponent } from './components/numerodoble/numerodoble.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    MenuComponent,
    NotfoundComponent,
    NumerodobleComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
