import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilempleadoComponent } from './components/perfilempleado/perfilempleado.component';
import { SubordinadosempleadoComponent } from './components/subordinadosempleado/subordinadosempleado.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilempleadoComponent,
    SubordinadosempleadoComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
