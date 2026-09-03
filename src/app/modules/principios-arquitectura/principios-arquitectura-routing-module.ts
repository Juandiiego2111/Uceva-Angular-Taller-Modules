import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPrincipiosComponent } from './pages/listado-principios/listado-principios.component';

const routes: Routes = [
  {
    path: 'listado-principios',
    component: ListadoPrincipiosComponent
  },
  {
    path: '**',
    redirectTo: 'listado-principios'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipiosArquitecturaRoutingModule { }
