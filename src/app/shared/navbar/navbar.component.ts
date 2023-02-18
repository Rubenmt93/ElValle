import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged:boolean=false
  fullwidth:boolean=false
  @HostListener('window:resize', ['$event'])
    onResize(event: { target: { innerWidth: any; }; }) {
      if(window.innerWidth > 750){
        this.fullwidth=true
      }else{
        this.fullwidth=false
      }

    }
  constructor(public authService:AuthService,
              public translate: TranslateService) {
    this.authService.userStateObs().subscribe(user =>{
      if (user) {                  
        this.logged=true        
      }
    });
    console.log(window.innerWidth);
    if(window.innerWidth > 700){
      this.fullwidth=true
    }
    

   }

  ngOnInit(): void {
  }
  switchLang(lang: string) {
    this.translate.use(lang)
    console.log(this.translate.currentLang);
    
  }
  logout(){
    this.authService.cerrarSesion();
  }

}
