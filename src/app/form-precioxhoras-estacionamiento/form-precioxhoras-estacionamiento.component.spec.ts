import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrecioxhorasEstacionamientoComponent } from './form-precioxhoras-estacionamiento.component';

describe('FormPrecioxhorasEstacionamientoComponent', () => {
  let component: FormPrecioxhorasEstacionamientoComponent;
  let fixture: ComponentFixture<FormPrecioxhorasEstacionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPrecioxhorasEstacionamientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPrecioxhorasEstacionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
