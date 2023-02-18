import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../../../services/avisos.service';
import { Aviso } from '../../../interfaces/aviso';

@Component({
  selector: 'app-lista-avisos',
  templateUrl: './lista-avisos.component.html',
  styleUrls: ['./lista-avisos.component.css']
})
export class ListaAvisosComponent implements OnInit {
  avisos:Aviso[]=[]
  constructor(private avisosService:AvisosService) { }

  ngOnInit(): void {
    this.avisosService.getAviso().subscribe(result => {
        this.avisos=result as Aviso[]
    })      
  }
  

}
