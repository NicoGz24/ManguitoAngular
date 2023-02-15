import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarManguitosComponent } from './donar-manguitos.component';

describe('DonarManguitosComponent', () => {
  let component: DonarManguitosComponent;
  let fixture: ComponentFixture<DonarManguitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonarManguitosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonarManguitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
