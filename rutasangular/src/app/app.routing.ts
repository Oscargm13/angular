import { HomeComponent } from "./components/home/home.component";
import { CineComponent } from "./components/cine/cine.component";
import { MusicaComponent } from "./components/musica/musica.component";

//Necesitamos una serie de modulos que se encuentran dentro de angular

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";

//NECESITAMOS UN ARRAY CON LAS RUTAS DEL TIPO Routes

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "cine", component: CineComponent},
  {path: "musica", component: MusicaComponent},
  {path: "numerodoble", component: NumerodobleComponent},
  {path: "numerodoble/:numero", component: NumerodobleComponent},
  {path: "**", component: NotfoundComponent },
]

//DESDE ESTA CLASE DEBEMOS ESPORTAR EL ARRAY DE RUTAS COMO PROVEEDOR
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);