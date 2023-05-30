import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeerAlumnosComponent } from './components/leer-alumnos/leer-alumnos.component';
import { PromedioComponent } from './components/promedio/promedio.component';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LeerAlumnosComponent,
    PromedioComponent,
    FormularioAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
