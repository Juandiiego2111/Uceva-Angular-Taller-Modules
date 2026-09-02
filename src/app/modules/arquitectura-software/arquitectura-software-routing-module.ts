import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArquitecturaSoftwarePage } from './pages/arquitectura-software-page/arquitectura-software-page';

const routes: Routes = [
  { path: '', component: ArquitecturaSoftwarePage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArquitecturaSoftwareRoutingModule { }
