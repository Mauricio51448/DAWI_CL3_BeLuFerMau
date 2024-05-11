import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-eliminar-nota-menor-promedio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-eliminar-nota-menor-promedio.component.html',
  styleUrl: './form-eliminar-nota-menor-promedio.component.scss'
})
export class FormEliminarNotaMenorPromedioComponent {
  nota = {
    nota1:0,
    nota2:0,
    nota3:0,
    nota4:0,
    resultado:0,
    notaMasBaja:0
  }
  calcularPromedio() {
    const notas = [
      this.nota.nota1,
      this.nota.nota2,
      this.nota.nota3,
      this.nota.nota4
    ];
  
    // Eliminar y mostrar la nota más baja
    this.nota.notaMasBaja = Math.min(...notas);
    const indexNotaMin = notas.indexOf(this.nota.notaMasBaja);
    notas.splice(indexNotaMin, 1);
  
    // Calcular el promedio con los pesos ajustados
    const promedioCalculado = notas[0] * 0.2 + notas[1] * 0.3 + notas[2] * 0.5;
  
    // Asignar el resultado al objeto promedio
    this.nota.resultado = Number(promedioCalculado.toFixed(2));
  }

}
