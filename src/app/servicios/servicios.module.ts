import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageServiciosComponent } from './main-page-servicios/main-page-servicios.component';
import { EscuelaComponent } from './components/escuela/escuela.component';
import { ClinicaComponent } from './components/clinica/clinica.component';
import { AsesoramientoComponent } from './components/asesoramiento/asesoramiento.component';
import { GuarderiaComponent } from './components/guarderia/guarderia.component';
import { TalleresComponent } from './components/talleres/talleres.component';
import {  TranslateModule } from '@ngx-translate/core';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainPageServiciosComponent,
    EscuelaComponent,
    ClinicaComponent,
    AsesoramientoComponent,
    GuarderiaComponent,
    TalleresComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule
  ]
})
export class ServiciosModule { }
