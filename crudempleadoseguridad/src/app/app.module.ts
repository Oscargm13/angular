import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SubordinadosComponent } from './components/subordinados/subordinados.component';
import { provideHttpClient } from '@angular/common/http';
import { EmpleadosService } from './service/empleados.service';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    SubordinadosComponent,
	MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [provideHttpClient(), EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
