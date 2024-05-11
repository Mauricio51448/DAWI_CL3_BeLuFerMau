import { Routes } from '@angular/router';
import { FormEliminarNotaMenorPromedioComponent } from './form-eliminar-nota-menor-promedio/form-eliminar-nota-menor-promedio.component';
import { FormMostrarParesRangoComponent } from './form-mostrar-pares-rango/form-mostrar-pares-rango.component';

export const routes: Routes = [
    {path: 'promedio', component: FormEliminarNotaMenorPromedioComponent},
    {path: 'pares', component: FormMostrarParesRangoComponent}
];
