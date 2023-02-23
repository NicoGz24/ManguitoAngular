import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCategoriaComponent } from './footer-categoria.component';

describe('FooterCategoriaComponent', () => {
  let component: FooterCategoriaComponent;
  let fixture: ComponentFixture<FooterCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
