import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AvisocontainerComponent } from './components/avisocontainer/avisocontainer.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { SubirImagenComponent } from './components/subir-imagen/subir-imagen.component';
 

const routes:Routes = [
  {
    path:'',
    children:[
      { 
        path:'avisos',
        component:AvisocontainerComponent,
        outlet: 'outledAdmin'
      },
      {
        path:'galeria',
        component:GaleriaComponent,
        outlet: 'outledAdmin'
      },
      
      {
        path:'subirImagen',
        component:SubirImagenComponent,
        outlet: 'outledAdmin'
      },
      {
        path:'**',
        redirectTo:"avisos",
        outlet: 'outledAdmin'
      },
    ]
  }
]
@NgModule({
  
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
