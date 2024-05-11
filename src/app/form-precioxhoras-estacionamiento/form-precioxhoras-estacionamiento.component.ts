import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-precioxhoras-estacionamiento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-precioxhoras-estacionamiento.component.html',
  styleUrl: './form-precioxhoras-estacionamiento.component.scss'
})
export class FormPrecioxhorasEstacionamientoComponent {

  horas: number = 0;
  minutos: number = 0;
  costo: number = 0;

  calcularCosto(): void {
    let totalHoras = this.horas + (this.minutos > 0 ? 1 : 0);
    this.costo = totalHoras * 1.5;
  }
}

