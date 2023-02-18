import { Component, OnInit } from '@angular/core';
import { Aviso } from 'src/app/interfaces/aviso';
import { AvisosService } from 'src/app/services/avisos.service';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {

  avisos:Aviso[]=[]
  constructor(private avisosService:AvisosService) { }

  ngOnInit(): void {
    this.avisosService.getAviso().subscribe(result => {
        this.avisos=result as Aviso[]
    })      
  }
}
