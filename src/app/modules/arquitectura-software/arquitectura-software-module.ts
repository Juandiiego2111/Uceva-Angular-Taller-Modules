import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArquitecturaSoftwareRoutingModule } from './arquitectura-software-routing-module';
import { ContentArquitectura } from './components/content-arquitectura/content-arquitectura';
import { ArquitecturaSoftwarePage } from './pages/arquitectura-software-page/arquitectura-software-page';


@NgModule({
  declarations: [
    ContentArquitectura,
    ArquitecturaSoftwarePage
  ],
  imports: [
    CommonModule,
    ArquitecturaSoftwareRoutingModule
  ]
})
export class ArquitecturaSoftwareModule { }
