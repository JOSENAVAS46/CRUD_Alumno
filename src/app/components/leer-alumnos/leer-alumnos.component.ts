import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/Alumno';
import { AlumnoService } from '../../services/alumnos.service';

@Component({
  selector: 'app-leer-alumnos',
  templateUrl: './leer-alumnos.component.html',
  styleUrls: ['./leer-alumnos.component.css'],
})
export class LeerAlumnosComponent implements OnInit {
  constructor(private alumnoService: AlumnoService) {}

  listaAlumnos: Alumno[] = [
    new Alumno('123456789', 'Juan', 'Pérez', 'Matemáticas', 8.5, 9.2),
    new Alumno('987654321', 'María', 'Gómez', 'Historia', 7.8, 6.9),
    new Alumno('456789123', 'Carlos', 'López', 'Ciencias', 6.2, 7.5),
    new Alumno('321654987', 'Laura', 'Torres', 'Literatura', 5, 8.7),
    new Alumno('789456123', 'Pedro', 'Hernández', 'Física', 7.5, 6.8),
    new Alumno('654321987', 'Ana', 'García', 'Química', 8.9, 9.3),
    new Alumno('147258369', 'Luis', 'Sánchez', 'Biología', 6.8, 7.2),
    new Alumno('369258147', 'Sara', 'Martínez', 'Inglés', 9.5, 9.8),
    new Alumno('258369147', 'Diego', 'Rodríguez', 'Geografía', 10, 7.6),
    new Alumno('852741963', 'Carolina', 'Ríos', 'Arte', 7.4, 5),
  ];
  listaFiltrada: Alumno[] = [];
  cantidadTodos: number = 0;
  cantidadAprobados: number = 0;
  cantidadReprobados: number = 0;

  ngOnInit() {
    this.listaFiltrada = this.listaAlumnos;
    this.cantidadTodos = this.listaAlumnos.length;
    this.cantidadAprobados = this.listaAlumnos.filter(
      (alumno) => alumno.estado === 'Aprobado'
    ).length;
    this.cantidadReprobados = this.listaAlumnos.filter(
      (alumno) => alumno.estado === 'Reprobado'
    ).length;
    this.alumnoService.setListaAlumnos(this.listaFiltrada);
  }
  filtrarAlumnos(opcion: string) {
    if (opcion === 'Todos') {
      this.listaFiltrada = this.listaAlumnos;
    } else if (opcion === 'Aprobados') {
      this.listaFiltrada = this.listaAlumnos.filter(
        (alumno) => alumno.estado === 'Aprobado'
      );
    } else if (opcion === 'Reprobados') {
      this.listaFiltrada = this.listaAlumnos.filter(
        (alumno) => alumno.estado === 'Reprobado'
      );
    }
  }
}
