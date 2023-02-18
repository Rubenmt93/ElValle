import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageAdminComponent } from './main-page-admin/main-page-admin.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { NuevoAvisosComponent } from './components/nuevo-avisos/nuevo-avisos.component';
import { ListaAvisosComponent } from './components/lista-avisos/lista-avisos.component';
import { AvisocontainerComponent } from './components/avisocontainer/avisocontainer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AvisosComponent } from './components/avisos/avisos.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SubirImagenComponent, AddImageDialog, SpinnerDialog } from './components/subir-imagen/subir-imagen.component';

import {  TranslateModule } from '@ngx-translate/core';
import { GalleryLightboxComponent } from './components/gallery-lightbox/gallery-lightbox.component';

@NgModule({
  declarations: [
    MainPageAdminComponent,
   
    GaleriaComponent,
    NuevoAvisosComponent,
    ListaAvisosComponent,
    AvisocontainerComponent,
    AvisosComponent,
    SubirImagenComponent,
    AddImageDialog,
    SpinnerDialog,
    GalleryLightboxComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AdminRoutingModule,
    TranslateModule
    
  ]
})
export class AdminModule { }
