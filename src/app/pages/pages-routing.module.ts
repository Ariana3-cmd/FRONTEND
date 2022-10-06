import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PredioComponent } from './predio/predio.component';
import { VerPrediosComponent } from './ver-predios/ver-predios.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'predio', component: PredioComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'ver', component: VerPrediosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
