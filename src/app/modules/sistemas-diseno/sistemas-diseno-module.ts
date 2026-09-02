import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemasDisenoRoutingModule } from './sistemas-diseno-routing-module';
import { SistemasDisenoHome } from './pages/sistemas-diseno-home/sistemas-diseno-home';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [
    SistemasDisenoHome
  ],
  imports: [
    CommonModule,
    SharedModule,
    SistemasDisenoRoutingModule
  ]
})
export class SistemasDisenoModule { }
