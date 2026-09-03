import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sistemas-diseno',
    loadChildren: () =>
      import('./modules/sistemas-diseno/sistemas-diseno-module').then(
        (m) => m.SistemasDisenoModule
      ),
  },
  {
    path: 'arquitectura-software',
    loadChildren: () => import('./modules/arquitectura-software/arquitectura-software-module').then(m => m.ArquitecturaSoftwareModule)
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
