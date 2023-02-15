import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDonacionesComponent } from './ver-donaciones.component';

describe('VerDonacionesComponent', () => {
  let component: VerDonacionesComponent;
  let fixture: ComponentFixture<VerDonacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDonacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDonacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
