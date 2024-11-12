import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilempleadoComponent } from './components/perfilempleado/perfilempleado.component';
import { SubordinadosempleadoComponent } from './components/subordinadosempleado/subordinadosempleado.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';

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
    AppRoutingModule,
    FormsModule,
    NgFor
    
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
