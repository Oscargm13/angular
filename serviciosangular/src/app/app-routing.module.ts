import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { ComicComponent } from './components/comic/comic.component';
import { CocheComponent } from './components/coche/coche.component';
import { DatosPlantillaComponent } from './components/datos-plantilla/datos-plantilla.component';
const routes: Routes = [
  {path: '', component: PersonasapiComponent},
  { path: 'comic', component: ComicComponent },
  { path: 'coche', component: CocheComponent },
  { path: 'datos', component: DatosPlantillaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
