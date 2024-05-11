import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalcularAprobacionDniComponent } from './form-calcular-aprobacion-dni.component';

describe('FormCalcularAprobacionDniComponent', () => {
  let component: FormCalcularAprobacionDniComponent;
  let fixture: ComponentFixture<FormCalcularAprobacionDniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCalcularAprobacionDniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCalcularAprobacionDniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
