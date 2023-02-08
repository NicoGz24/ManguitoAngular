import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmprendimientosComponent } from './listar-emprendimientos.component';

describe('ListarEmprendimientosComponent', () => {
  let component: ListarEmprendimientosComponent;
  let fixture: ComponentFixture<ListarEmprendimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEmprendimientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEmprendimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
