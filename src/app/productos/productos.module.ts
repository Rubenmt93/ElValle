import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageProductosComponent } from './main-page-productos/main-page-productos.component';
import { MacetasComponent } from './components/macetas/macetas.component';
import { HerramientasComponent } from './components/herramientas/herramientas.component';
import { VitaminasComponent } from './components/vitaminas/vitaminas.component';
import { AbonosComponent } from './components/abonos/abonos.component';
import { TierrasComponent } from './components/tierras/tierras.component';
import { FitosanitarioComponent } from './components/fitosanitario/fitosanitario.component';
import { AccesoriosComponent } from './components/accesorios/accesorios.component';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    MainPageProductosComponent,
    MacetasComponent,
    HerramientasComponent,
    VitaminasComponent,
    AbonosComponent,
    TierrasComponent,
    FitosanitarioComponent,
    AccesoriosComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule
  ]
})
export class ProductosModule { }
