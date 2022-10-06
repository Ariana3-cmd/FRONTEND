import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionUbicacionDescripcionComponent } from './condicion-ubicacion-descripcion.component';

describe('CondicionUbicacionDescripcionComponent', () => {
  let component: CondicionUbicacionDescripcionComponent;
  let fixture: ComponentFixture<CondicionUbicacionDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionUbicacionDescripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionUbicacionDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
