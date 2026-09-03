import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemasDisenoHome } from './pages/sistemas-diseno-home/sistemas-diseno-home';

const routes: Routes = [
  {
    path: '',
    component: SistemasDisenoHome,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemasDisenoRoutingModule { }
