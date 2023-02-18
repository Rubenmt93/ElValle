import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-page-admin',
  templateUrl: './main-page-admin.component.html',
  styleUrls: ['./main-page-admin.component.css']
})
export class MainPageAdminComponent implements OnInit {

  opened=true
  showFiller = false;
  constructor(private router:Router,
              private authService:AuthService) {
    if(window.matchMedia("(max-width: 700px)").matches){
      this.opened=false
    }
   }

  ngOnInit( ): void {
  }
 
  logout(){
    this.authService.cerrarSesion();
  }

}
