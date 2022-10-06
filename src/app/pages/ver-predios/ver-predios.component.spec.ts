import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPrediosComponent } from './ver-predios.component';

describe('VerPrediosComponent', () => {
  let component: VerPrediosComponent;
  let fixture: ComponentFixture<VerPrediosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPrediosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPrediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
