
import { Component,  OnInit } from '@angular/core';
import { Image } from 'src/app/interfaces/image';
import { GaleryService } from '../../services/galery.service';
 

@Component({
  selector: 'app-main-page-galeria',
  templateUrl: './main-page-galeria.component.html',
  styleUrls: ['./main-page-galeria.component.css']
})
export class MainPageGaleriaComponent implements OnInit {
 
  verMas:boolean=true
  data:Image[]=[

  ]

  constructor( private galleryService:GaleryService){

   

  }
  ngOnInit(): void {
    
    
    this.galleryService.get12Images().subscribe(result => {
      this.data  =result as Image[]
  })
    
  }

  getAllImages(){
    this.verMas=false
    this.data=[]
    this.galleryService.getImages().subscribe(result => {
      this.data  =result as Image[]
    })
  }
 

}















