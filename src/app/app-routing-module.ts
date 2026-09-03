import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'arquitectura-software',
    loadChildren: () => import('./modules/arquitectura-software/arquitectura-software-module').then(m => m.ArquitecturaSoftwareModule)
  },
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
