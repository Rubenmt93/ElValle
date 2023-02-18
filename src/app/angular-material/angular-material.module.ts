import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [],
  exports:[    
    MatCardModule,    
    MatIconModule,   
    MatSidenavModule,
    MatListModule,   
    MatSelectModule,
    MatToolbarModule,  
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatMenuModule
    


      
  ],
 
})
export class AngularMaterialModule { }
