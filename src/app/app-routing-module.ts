import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'principios-arquitectura',
    loadChildren: () => import('./modules/principios-arquitectura/principios-arquitectura-module')
      .then(m => m.PrincipiosArquitecturaModule)
  },
  {
    path: '**',
    redirectTo: 'arquitectura-software'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
