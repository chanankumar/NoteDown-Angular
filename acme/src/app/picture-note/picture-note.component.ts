import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { dataCenter } from '../data';

@Component({
  selector: 'app-picture-note',
  templateUrl: './picture-note.component.html',
  styleUrl: './picture-note.component.scss'
})
export class PictureNoteComponent {
  descriptionValue: string = '';
  titleValue: string = '';
  pictureValue: any = '';


  constructor(private router: Router) {}
  
  savePictureNote() {
    dataCenter.picturenotes.push({"title" : this.titleValue, "description" : this.descriptionValue});
    this.router.navigate(['picturelanding']);
  } 

  updateDescriptionValue(value:string) {
    this.descriptionValue = value;
  }

  updateTitleValue(value:string) {
    this.titleValue = value;
  }

  updatePictureValue(value) {
    // getting image base64path
    // this.pictureValue = value;
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      if(localStorage.getItem('imagesSaved') === null) {
        localStorage.setItem('imagesSaved', JSON.stringify([]));
      }
      let newImageData = {
        Id : dataCenter.picturenotes.length,
        imageUrl : reader.result
      }
      let data = JSON.parse(localStorage.getItem("imagesSaved"));
      data.push(newImageData);
      localStorage.setItem("imagesSaved", JSON.stringify(data))
    })
    reader.readAsDataURL(value);
  }
}
