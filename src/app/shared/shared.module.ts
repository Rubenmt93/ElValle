import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import {  TranslateModule } from '@ngx-translate/core';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [   
    NavbarComponent,
        
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    HttpClientModule,
    TranslateModule
  ],
  exports: [
    NavbarComponent,
    
   
  ]
})
export class SharedModule { }
