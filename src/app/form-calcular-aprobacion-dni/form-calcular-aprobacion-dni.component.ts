import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-calcular-aprobacion-dni',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-calcular-aprobacion-dni.component.html',
  styleUrl: './form-calcular-aprobacion-dni.component.scss'
})
export class FormCalcularAprobacionDniComponent {

  yearOfBirth: number;
  dniResult: { type: string, message: string } | null;

  constructor() {
    this.yearOfBirth = 0;
    this.dniResult = null;
  }

  onSubmit() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.yearOfBirth;

    if (age >= 18) {
      this.dniResult = { type: 'success', message: 'Aprobado para DNI Azul' };
    } else {
      this.dniResult = { type: 'danger', message: 'Aún no puede sacar su DNI' };
    }
  }


}
