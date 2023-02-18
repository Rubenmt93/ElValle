import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageLoginComponent } from './mainpage-login/mainpage-login.component';
import { LoginComponent } from './components/login/login.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainpageLoginComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
