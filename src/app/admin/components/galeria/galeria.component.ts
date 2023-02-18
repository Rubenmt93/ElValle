import { Component, OnInit } from '@angular/core';
import { GaleryService } from 'src/app/services/galery.service';
import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

 

  verMas:boolean=true
  data:Image[]=[]

  constructor( private galleryService:GaleryService){

   

  }
  ngOnInit(): void {
    
    
    this.galleryService.getImages().subscribe(result => {
      this.data  =result as Image[]
  })
    
  }

  
 

}
