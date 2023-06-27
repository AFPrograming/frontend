import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListPersonsComponent } from './components/list-persons/list-persons.component';
import { AddEditPersonsComponent } from './components/add-edit-persons/add-edit-persons.component';

const routes: Routes = [
  { path: '', component: ListPersonsComponent },
  { path: 'add', component: AddEditPersonsComponent },
  { path: 'edit/:id', component: AddEditPersonsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

