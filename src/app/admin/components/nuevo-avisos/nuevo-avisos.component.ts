import { Component} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AvisosService } from '../../../services/avisos.service';

@Component({
  selector: 'app-nuevo-avisos',
  templateUrl: './nuevo-avisos.component.html',
  styleUrls: ['./nuevo-avisos.component.css']
})
export class NuevoAvisosComponent  {

  avisosForm: FormGroup = this.fb.group({
    mensaje: ['',[Validators.required]]    
  })
  
  constructor(private fb: FormBuilder,
              private activatedRoute:ActivatedRoute,
              private avisosService:AvisosService) {
     
  }
  sendComment(){
    this.avisosService.addComment(this.avisosForm.controls['mensaje'].value)
     this.avisosForm.reset()
  }  
  
}
