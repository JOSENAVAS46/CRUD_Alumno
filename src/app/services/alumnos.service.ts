import { Injectable } from '@angular/core';
import { Alumno } from './../models/Alumno';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private listaAlumnos: Alumno[] = [];

  getListaAlumnos(): Alumno[] {
    return this.listaAlumnos;
  }

  setListaAlumnos(_lista: Alumno[]): void {
    this.listaAlumnos = _lista;
  }
}
