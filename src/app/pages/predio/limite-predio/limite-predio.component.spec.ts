import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitePredioComponent } from './limite-predio.component';

describe('LimitePredioComponent', () => {
  let component: LimitePredioComponent;
  let fixture: ComponentFixture<LimitePredioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitePredioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitePredioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
