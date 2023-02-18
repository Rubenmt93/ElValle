import { Component, HostListener, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Image } from '../../../interfaces/image';
import { GaleryService } from '../../../services/galery.service';

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.css']
})
export class GalleryLightboxComponent implements OnInit {
  @Input() galleryData: Image[] = []
  @Input() showCount = false
  showMask:boolean= false
  currentLightboxImage: Image = this.galleryData[0]
  currentIndex=0
  controls:boolean = false
  previewImage:boolean=false
  totalImageCount=0
  ImageForm: FormGroup = this.fb.group({  
    texto: ["Prueba",[Validators.required]],          
  })

  @HostListener('document:keyup', ['$event'])
    onKeyUp(ev:KeyboardEvent) {
      // do something meaningful with it
      
      if(this.showMask){
        switch(ev.key){
          case 'Escape':
            this.closeImage();
            break;
          case "ArrowRight":
            this.nextImage();
            break
          case "ArrowLeft":
            this.prevImage();
            break

        }
      }
     }
  constructor( private  galleryService:GaleryService,
               private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.totalImageCount= this.galleryData.length
  }

  ngOnChanges(changes: SimpleChanges): void {   
    this.totalImageCount= this.galleryData.length
  }
  onPreviewImage(index: number):void{
    this.showMask=true
    this.previewImage=true
    this.controls=true
    this.currentIndex=index
    this.currentLightboxImage = this.galleryData[index]
    this.ImageForm.controls['texto'].setValue(this.galleryData[index].description)

  }
  closeImage(){
    this.previewImage=false 
    this.showMask=false
    this.controls=false
    this.currentIndex=0
    this.currentLightboxImage = this.galleryData[0]
  }
  nextImage(){
    if(this.currentIndex === this.totalImageCount-1){
      this.currentIndex=0
      this.currentLightboxImage = this.galleryData[0]
     }else{
      this.currentIndex++
      this.currentLightboxImage = this.galleryData[this.currentIndex]
     }
     console.log(this.currentLightboxImage.description);
     this.ImageForm.controls['texto'].setValue(this.galleryData[this.currentIndex].description)
    }
  prevImage(){
    if(this.currentIndex === 0){
      this.currentIndex=this.totalImageCount-1
      this.currentLightboxImage = this.galleryData[this.totalImageCount-1]
    }else{
    this.currentIndex--
    this.currentLightboxImage = this.galleryData[this.currentIndex]
    }
    this.ImageForm.controls['texto'].setValue(this.galleryData[this.currentIndex].description)

  }

  eliminarImagen( id: string){
    this.galleryService.deleteImage(id)
  }

  updateDescription(){
    var eventId= this.galleryData[this.currentIndex].eventId
    var description=this.ImageForm.controls['texto'].value
    this.galleryService.updateComment(eventId,description)
    this.closeImage()
    
  }
}

