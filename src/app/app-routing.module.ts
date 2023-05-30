import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeerAlumnosComponent } from './components/leer-alumnos/leer-alumnos.component';
import { PromedioComponent } from './components/promedio/promedio.component';
const routes: Routes = [
  { path: '', component: LeerAlumnosComponent },
  { path: 'promedio', component: PromedioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
