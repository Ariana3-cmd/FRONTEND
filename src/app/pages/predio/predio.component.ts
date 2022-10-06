import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-predio',
  templateUrl: './predio.component.html',
  styleUrls: ['./predio.component.scss'],
})
export class PredioComponent implements OnInit {
  background: ThemePalette = 'primary';
  selectedIndex: number = 0;
  datos: any;

  constructor() {}

  ngOnInit(): void {}

  nextTabsView(action: any) {
    if (action) {
      this.selectedIndex = 1;
    }
  }

  nextTabsView2(action: any) {
    if (action) {
      this.selectedIndex = 2;
    }
  }

  previusView(action: any) {
    if (!action) {
      this.selectedIndex = 0;
    }
  }

  previusView2(action: any) {
    if (!action) {
      this.selectedIndex = 1;
    }
  }
  saveDatos(action: any) {
    this.datos = action;
  }

  saveDatosCondicionUbicacionDescripcion(action: any) {
    this.datos = {};
    this.datos = action;
  }
}
