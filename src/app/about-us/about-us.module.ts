import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageAboutUsComponent } from './main-page-about-us/main-page-about-us.component';
import { ViveroComponent } from './components/vivero/vivero.component';
import { JuanComponent } from './components/juan/juan.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import {  TranslateModule } from '@ngx-translate/core';
import {  HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    MainPageAboutUsComponent,
    ViveroComponent,
    JuanComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    TranslateModule,
    HttpClientModule
  ]
})
export class AboutUsModule { }
