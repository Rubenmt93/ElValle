import { Component, OnInit } from '@angular/core';
import { CarrosuelItem } from 'src/app/interfaces/carrosuel-item';
import { CarrosuelService } from 'src/app/services/carrosuel.service';
interface Item {
  imageSrc:string;
  imageAlt:string;
}
@Component({
  selector: 'app-interior-container',
  templateUrl: './interior-container.component.html',
  styleUrls: ['./interior-container.component.css']
})
export class InteriorContainerComponent implements OnInit {

  images:CarrosuelItem[]=[]
  constructor( private carrosuelService:CarrosuelService) { 
    this.carrosuelService.getCarrousel('interior').subscribe(result=>{      
      this.images=result as CarrosuelItem[]      
    })     
  }


  

  ngOnInit(): void {
  }

}
