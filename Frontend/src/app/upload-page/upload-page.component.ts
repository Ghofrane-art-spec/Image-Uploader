import { Component } from '@angular/core';
import { ImageService } from '../image.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent {
  selectedFile: File | null = null;
  imageUrl: string | null = null;

  constructor(private service:ImageService,private router:Router){ 
    //loader
    window.addEventListener("load" ,()=>{
      const loader =document.querySelector(".loader");
      loader?.classList.add("loader-hidden");

      loader?.addEventListener("transitionend",() =>{
        document.body.removeChild(loader);
      })
    })
  }

  

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
    var imageName=this.selectedFile?.name;
    if(this.selectedFile!=null){
      const formData: FormData = new FormData();
      formData.append('image', this.selectedFile);
      this.service.UploadImage(formData).subscribe(()=>{
        console.log("image uploaded");
        this.service.DisplayImage(imageName).subscribe((image:any)=>{
          console.log("image displayed");
          const blob = new Blob([image], { type: 'image/*' });
          this.imageUrl = URL.createObjectURL(blob);
          console.log("image displayed");
          //switch to display interface
          this.router.navigate(["/display"],   { state: { imageUrl: this.imageUrl } });
        },(error)=>{
          console.log(error);
        });
      },(error)=>{
        console.log(error);
      });
    }
  }

 



}
