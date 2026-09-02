import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipiosArquitecturaRoutingModule } from './principios-arquitectura-routing-module';

import { ListadoPrincipiosComponent } from './pages/listado-principios/listado-principios.component';
import { TablaResumenPrincipiosComponent } from './components/tabla-resumen-principios/tabla-resumen-principios.component';
import { CardPrincipioComponent } from './components/card-principio/card-principio.component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [
    ListadoPrincipiosComponent,
    TablaResumenPrincipiosComponent,
    CardPrincipioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrincipiosArquitecturaRoutingModule
  ]
})
export class PrincipiosArquitecturaModule { }
