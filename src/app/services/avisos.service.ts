import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
firebase.initializeApp(environment.firebaseConfig)
@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  constructor(private firestore: AngularFirestore) { }
  addComment(mensaje:string){
     return this.firestore.collection('avisos').add({msg:mensaje});
  }
  getAviso(){
    return this.firestore.collection('avisos').valueChanges({ idField: 'eventId' })
  }
  deleteAviso(id:string){
    this.firestore.collection("avisos").doc(id).delete()
  }
}
