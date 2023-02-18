import { Injectable } from '@angular/core';

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { environment } from 'src/environments/environment';
firebase.initializeApp(environment.firebaseConfig)
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userState: any;
  constructor(private _auth : AngularFireAuth){
    this.userStateObs().subscribe(user => {
      if (user) {
        this.userState = user;
        localStorage.setItem('ElValle', JSON.stringify(this.userState));
          
      } else {
        localStorage.removeItem('ElValle')
         JSON.parse(localStorage.getItem('ElValle')!);
      }
    });
  }

  async login(email: string, password: string){
      try{
        console.log("Si se ha logueado");
        
          return await this._auth.signInWithEmailAndPassword(email, password);
      }
      catch(error) {
          alert("No se ha podido hacer el log-in correctamente. Error: " + error)
          console.log("No se ha podido hacer el log-in correctamente. Error: " + error);
          return null;
      }
    }
  userStateObs(){
    return this._auth.authState
  }
  cerrarSesion(){
    localStorage.removeItem('ElValle');
    this._auth.signOut()
    
  }
}
