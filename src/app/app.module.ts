import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { InicioModule } from './inicio/inicio.module';
import { SharedModule } from './shared/shared.module';
import { GaleriaModule } from './galeria/galeria.module';
import { BonsaisModule } from './bonsais/bonsais.module';
import { ServiciosModule } from './servicios/servicios.module';
import { ProductosModule } from './productos/productos.module';
import { AboutUsModule } from './about-us/about-us.module';
import { LoginModule } from './login/login.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
@NgModule({
  declarations: [ 
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    InicioModule,
    SharedModule,
    GaleriaModule,
    BonsaisModule,
    ServiciosModule,
    ProductosModule,
    AboutUsModule,
    HammerModule,
    LoginModule,
    AdminModule,
  
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })

   

  ],
  
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,  './assets/i18n/','.json');
}