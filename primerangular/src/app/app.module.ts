import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HooksAngular } from '../components/hooksangular/hooksangular.component';
import { DeportesComponent } from '../components/deportes/deportes.component';
import { FormsbindingComponent } from '../components/formsbinding/formsbinding.component';
import { SumarnumerosComponent } from '../components/sumarnumeros/sumarnumeros.component';


@NgModule({
  declarations: [
    AppComponent,
	HooksAngular,
	DeportesComponent,
	FormsbindingComponent,
	SumarnumerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
