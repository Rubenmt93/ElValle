import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GaleryService } from '../../../services/galery.service';

@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.css']
})
export class SubirImagenComponent implements OnInit {
  imgURL:any= "./assets/imagePlaceholder.png"


  ImageForm: FormGroup = this.fb.group({
    file: [this.imgURL],
    texto: ["",[Validators.required]], 
      
    
  })
  constructor(private fb: FormBuilder,
              private galeryService:GaleryService,
              public dialog: MatDialog,) { }
 
  ngOnInit(): void {
  }
  uploadFile(event:any){
    let fileList = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(fileList[0]);
    reader.onloadend=() => {
      this.imgURL=reader.result
    }
    this.ImageForm.controls['file'].markAsTouched()
  }
  uploadImage(){
    var dialogRefSpinner =this.dialog.open(SpinnerDialog);
    // var file=this.imgURL
    // var texto:string= this.ImageForm.controls['texto'].value
    // this.galeryService.createImage(texto,file).then( result => {   
    //    dialogRefSpinner.close()                                                       
    //   var dialogRef =this.dialog.open(AddImageDialog); 
    //   dialogRef.afterClosed().subscribe(result => {
    //     this.ImageForm.reset()
    //     this.imgURL="./assets/imagePlaceholder.png"
    //   });    
    // })
    dialogRefSpinner.close()   
    var dialogRef =this.dialog.open(AddImageDialog); 
   
  }
 
  
}

 
@Component({
  selector: 'dialog-imagenSubida',
  templateUrl: './dialog.html',
  styleUrls: ['./subir-imagen.component.css']
})
export class AddImageDialog {
  constructor(public dialogRef: MatDialogRef< AddImageDialog>) {}      
  sendReport(){}
}

@Component({
  selector: 'dialog-spinner',
  templateUrl: './spinnerDialog.html',
  styleUrls: ['./subir-imagen.component.css']
})
export class SpinnerDialog {
  constructor(public dialogRef: MatDialogRef< SpinnerDialog>,) {}      
  sendReport(){}
}

function delay(arg0: number) {
  throw new Error('Function not implemented.');
}
