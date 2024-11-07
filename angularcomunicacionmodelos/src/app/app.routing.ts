
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ListaproductosComponent } from "./components/listaproductos/listaproductos.component";


//NECESITAMOS UN ARRAY CON LAS RUTAS DEL TIPO Routes

const appRoutes: Routes = [
  {path: "", component: ListaproductosComponent},
]

//DESDE ESTA CLASE DEBEMOS ESPORTAR EL ARRAY DE RUTAS COMO PROVEEDOR
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);