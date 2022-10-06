import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PredioComponent } from './predio/predio.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { DatosContribuyenteComponent } from './predio/datos-contribuyente/datos-contribuyente.component';
import { CondicionUbicacionDescripcionComponent } from './predio/condicion-ubicacion-descripcion/condicion-ubicacion-descripcion.component';
import { LimitePredioComponent } from './predio/limite-predio/limite-predio.component';
import { FormsModule } from '@angular/forms';
import { VerPrediosComponent } from './ver-predios/ver-predios.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DetallePredioComponent } from './ver-predios/detalle-predio/detalle-predio.component';
@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    PredioComponent,
    DatosContribuyenteComponent,
    CondicionUbicacionDescripcionComponent,
    LimitePredioComponent,
    VerPrediosComponent,
    DetallePredioComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatTabsModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
    MatTableModule
  ],
  exports: [DashboardComponent, PredioComponent],
})
export class PagesModule {}
