import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import 'firebase/compat/storage';
firebase.initializeApp(environment.firebaseConfig) 
@Injectable({
  providedIn: 'root'
})
export class GaleryService {
  storageRef=firebase.app().storage().ref()


  constructor(private firestore: AngularFirestore,) { }
  createImage(texto:string, img64:string){
    return this.subirImagen(img64).then(imagen =>{   
      
        var image = {
        
          img:imagen,          
          description:texto
        }
        return this.firestore.collection('gallery').add(image);
        
      
    })
   
  }
  async subirImagen( img64:any){      
    try{
      var time =  Date.now()
      let respuesta = await this.storageRef.child("Galeria/"+time).putString(img64,'data_url')
      return await respuesta.ref.getDownloadURL()
    }catch (error){
      window.alert(error)
      return null
    }
  }

   getImages(){
    return this.firestore.collection('gallery',ref => ref.orderBy('description','asc')).valueChanges({idField: 'eventId'})
    
  }
  get12Images(){
    return this.firestore.collection('gallery', ref => ref.orderBy('description','asc').limit(20)).valueChanges({idField: 'eventId'})
  }
  deleteImage(id:string){
    return this.firestore.collection("gallery").doc(id).delete()
  }
  updateComment(eventid:string, description:string){
    return this.firestore.collection('gallery').doc(eventid).update({'description':description})

    
  }
 
}
