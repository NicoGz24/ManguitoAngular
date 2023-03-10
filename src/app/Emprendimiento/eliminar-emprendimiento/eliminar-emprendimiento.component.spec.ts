import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEmprendimientoComponent } from './eliminar-emprendimiento.component';

describe('EliminarEmprendimientoComponent', () => {
  let component: EliminarEmprendimientoComponent;
  let fixture: ComponentFixture<EliminarEmprendimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEmprendimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarEmprendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
