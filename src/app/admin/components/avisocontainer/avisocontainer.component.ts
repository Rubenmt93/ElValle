import { Component, Input, OnInit } from '@angular/core';
import { Aviso } from 'src/app/interfaces/aviso';
import { AvisosService } from '../../../services/avisos.service';

@Component({
  selector: 'app-avisocontainer',
  templateUrl: './avisocontainer.component.html',
  styleUrls: ['./avisocontainer.component.css']
})
export class AvisocontainerComponent implements OnInit {
  @Input () aviso!:Aviso
  constructor(private avisosService:AvisosService) { }

  ngOnInit(): void {

  }
  eliminar(){
    this.avisosService.deleteAviso(this.aviso.eventId)
  }
}
