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
    new Alumno('0924004914', 'Jose', 'Navas', 'Programacion Orientada a Objetos', 10, 9),
    new Alumno('741852963', 'Andrés', 'López', 'Desarrollo Web I', 7.9, 8.1),
    new Alumno('369741852', 'Gabriela', 'Pérez', 'Base de Datos I', 9.2, 9.4),
    new Alumno('852963741', 'Roberto', 'Gómez', 'Experiencia de Usuario', 8.6, 3),
    new Alumno('963852741', 'Isabel', 'Hernández', 'Programacion Orientada a Eventos', 6.8, 6.9),
    new Alumno('456123789', 'Fernando', 'García', 'Programacion Orientada a Objetos', 9.8, 9.7),
    new Alumno('987369258', 'Valentina', 'Martínez', 'Base de Datos', 8.3, 8.2),
    new Alumno('369852147', 'Lucía', 'Sánchez', 'Calidad de Software', 7.5, 7.1),
    new Alumno('123987456', 'Eduardo', 'Torres', 'Base de Datos II', 8.7, 5),
    new Alumno('987654321', 'Julia', 'Rodríguez', 'Desarrollo Web II', 9.5, 8),
    new Alumno('741963852', 'Mariano', 'López', 'Ingenieria de Requisitos', 7.6, 7),
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
