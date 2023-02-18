import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageGaleriaComponent } from './main-page-galeria/main-page-galeria.component';

import { GalleryLightboxComponent } from './components/gallery-lightbox/gallery-lightbox.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import {  HttpClientModule } from '@angular/common/http';
import {  TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    MainPageGaleriaComponent,
    GalleryLightboxComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    HttpClientModule,
    TranslateModule

  ],
  exports: [
    GalleryLightboxComponent
  ]
})
export class GaleriaModule { }
