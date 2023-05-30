import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/Alumno';
import { AlumnoService } from '../../services/alumnos.service';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css'],
})
export class FormularioAlumnoComponent {
  constructor(private alumnoService: AlumnoService) {}
  cedula: string = '';
  nombre: string = '';
  apellido: string = '';
  asignatura: string = '';
  nota1: number = 0;
  nota2: number = 0;

  submitForm() {
    const alumno = new Alumno(
      this.cedula,
      this.nombre,
      this.apellido,
      this.asignatura,
      this.nota1,
      this.nota2
    );
    this.alumnoService.getListaAlumnos().push(alumno);
    
    this.cedula ="";
    this.nombre ="";
    this.apellido ="";
    this.asignatura ="";
    this.nota1  =0;
    this.nota2  =0;

  }
}
