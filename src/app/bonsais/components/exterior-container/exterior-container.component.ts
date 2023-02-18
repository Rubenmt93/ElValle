import { Component, OnInit } from '@angular/core';
import { CarrosuelItem } from 'src/app/interfaces/carrosuel-item';
import { CarrosuelService } from 'src/app/services/carrosuel.service';

@Component({
  selector: 'app-exterior-container',
  templateUrl: './exterior-container.component.html',
  styleUrls: ['./exterior-container.component.css']
})
export class ExteriorContainerComponent implements OnInit {
  

  images:CarrosuelItem[]=[]
  constructor( private carrosuelService:CarrosuelService) { 
    this.carrosuelService.getCarrousel('exterior').subscribe(result=>{      
      this.images=result as CarrosuelItem[]      
    })     
  }

  ngOnInit(): void {
  }
  
  

}
