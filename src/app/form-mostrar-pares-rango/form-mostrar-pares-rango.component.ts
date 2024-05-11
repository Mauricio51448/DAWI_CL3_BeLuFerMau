import { Component } from '@angular/core';

@Component({
  selector: 'app-form-mostrar-pares-rango',
  standalone: true,
  imports: [],
  templateUrl: './form-mostrar-pares-rango.component.html',
  styleUrl: './form-mostrar-pares-rango.component.scss'
})
export class FormMostrarParesRangoComponent {

  numero1 = 20;
  numero2 = 10;
  arrayPares: number[] = [];

  calcularNumerosPares(){
    for(let i = this.numero1-1;i > this.numero2;i--){
      if(i%2 === 0) this.arrayPares.push(i);
    }
  }


}
