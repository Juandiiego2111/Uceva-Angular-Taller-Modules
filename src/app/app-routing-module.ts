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
    path: '**',
    redirectTo: 'arquitectura-software'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
