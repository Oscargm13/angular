import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'create', component:  CreateComponent},
  { path: 'details/:id/:nombre/:localidad', component:  DetailsComponent},
  { path: 'edit/:id', component:  EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
