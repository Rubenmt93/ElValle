import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
firebase.initializeApp(environment.firebaseConfig)
@Injectable({
  providedIn: 'root'
})
export class CarrosuelService {

  constructor(private firestore: AngularFirestore) { }
  
  getCarrousel(campo:string){
    return this.firestore.collectionGroup('carrouselItem' ,ref =>  ref.where("carrousel","==",campo)).valueChanges({idField: 'eventId'} )
  }
  
}
 