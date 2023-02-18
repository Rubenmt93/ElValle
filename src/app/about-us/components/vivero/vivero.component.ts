import { Component, OnInit } from '@angular/core';
import { CarrosuelService } from '../../../services/carrosuel.service';
import { CarrosuelItem } from '../../../interfaces/carrosuel-item';
interface Item{
  imageSrc: string
 imageAlt: string
}
@Component({
  selector: 'app-vivero',
  templateUrl: './vivero.component.html',
  styleUrls: ['./vivero.component.css']
})
export class ViveroComponent implements OnInit {
  images:CarrosuelItem[]=[]
  constructor( private carrosuelService:CarrosuelService) { 
    this.carrosuelService.getCarrousel('vivero').subscribe(result=>{      
      this.images=result as CarrosuelItem[]      
    })     
  }

  ngOnInit(): void {
  }
  
  

}
