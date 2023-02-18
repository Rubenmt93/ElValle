import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  showPasswd :boolean = true
  emailPattern:string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  loginForm: FormGroup = this.fb.group({
    email: ['',[Validators.required,Validators.pattern(this.emailPattern)]],
    password: ['',Validators.required]
  })
  
  
  constructor(private fb: FormBuilder,               
              private router:Router,
              private authService:AuthService
             ) {
              this.authService.userStateObs().subscribe(user =>{
                if (user) {                  
                  this.router.navigate(['/'])             
                }
              });
    
  }
  
  validezCampo(campo:string){
   return this.loginForm.controls[campo].errors && this.loginForm.controls[campo].touched
  }
 
  
  login(){         
    const email=this.loginForm.controls['email'].value;
    const passwd=this.loginForm.controls['password'].value; 
    this.authService.login(email,passwd)
  }  
  
    
}
