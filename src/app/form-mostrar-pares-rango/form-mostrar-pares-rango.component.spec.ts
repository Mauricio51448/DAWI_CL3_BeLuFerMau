import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMostrarParesRangoComponent } from './form-mostrar-pares-rango.component';

describe('FormMostrarParesRangoComponent', () => {
  let component: FormMostrarParesRangoComponent;
  let fixture: ComponentFixture<FormMostrarParesRangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMostrarParesRangoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormMostrarParesRangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
