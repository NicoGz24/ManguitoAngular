import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarPlanComponent } from './comprar-plan.component';

describe('ComprarPlanComponent', () => {
  let component: ComprarPlanComponent;
  let fixture: ComponentFixture<ComprarPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprarPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
