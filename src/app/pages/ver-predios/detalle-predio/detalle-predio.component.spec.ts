import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePredioComponent } from './detalle-predio.component';

describe('DetallePredioComponent', () => {
  let component: DetallePredioComponent;
  let fixture: ComponentFixture<DetallePredioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePredioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePredioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
