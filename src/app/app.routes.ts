import { Routes } from '@angular/router';
import { FormEliminarNotaMenorPromedioComponent } from './form-eliminar-nota-menor-promedio/form-eliminar-nota-menor-promedio.component';
import { FormMostrarParesRangoComponent } from './form-mostrar-pares-rango/form-mostrar-pares-rango.component';
import { FormPrecioxhorasEstacionamientoComponent } from './form-precioxhoras-estacionamiento/form-precioxhoras-estacionamiento.component';
import { FormCalcularAprobacionDniComponent } from './form-calcular-aprobacion-dni/form-calcular-aprobacion-dni.component';

export const routes: Routes = [
    {path: 'promedio', component: FormEliminarNotaMenorPromedioComponent},
    {path: 'pares', component: FormMostrarParesRangoComponent},
    {path: 'estacionamiento', component: FormPrecioxhorasEstacionamientoComponent}
    {path: 'dni', component: FormCalcularAprobacionDniComponent}
];
