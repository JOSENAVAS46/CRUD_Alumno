import { Component } from '@angular/core';
import { AlumnoService } from '../../services/alumnos.service';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.css'],
})
export class PromedioComponent {
  constructor(private alumnoService: AlumnoService) {}
  listaAlumnos = this.alumnoService.getListaAlumnos();
  sumaProm = 0;
  cantidadAlumnos = this.listaAlumnos.length;

  promedioGeneral = this.obtenerPromedio().toFixed(2);

  obtenerPromedio() {
    let promedio = 0;
    for (let alumno of this.listaAlumnos) {
      this.sumaProm += alumno.promedio;
    }
    promedio = this.sumaProm / this.cantidadAlumnos;
    return promedio;
  }
}
