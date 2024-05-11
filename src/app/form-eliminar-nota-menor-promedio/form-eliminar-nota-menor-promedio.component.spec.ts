import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEliminarNotaMenorPromedioComponent } from './form-eliminar-nota-menor-promedio.component';

describe('FormEliminarNotaMenorPromedioComponent', () => {
  let component: FormEliminarNotaMenorPromedioComponent;
  let fixture: ComponentFixture<FormEliminarNotaMenorPromedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEliminarNotaMenorPromedioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEliminarNotaMenorPromedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
