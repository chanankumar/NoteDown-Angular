import { Component } from '@angular/core';
import { dataCenter } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-note',
  templateUrl: './custom-note.component.html',
  styleUrl: './custom-note.component.css'
})
export class CustomNoteComponent {

  showTitle:boolean = false;
  showDescription:boolean = false;
  showPicture:boolean = false;
  showDocument:boolean = false;

  titleValue:string = null;
  descriptionValue:string = null;
  pictureValue:string = null;
  documentValue:string = null;
  documentTypeValue: any;
  pictureUrl: string | ArrayBuffer;
  fileUrl: string;

  constructor(private router:Router) {}

  addTitle() {
    this.showTitle = true;
  }

  addDescription() {
    this.showDescription = true;
  }

  addPicture() {
    this.showPicture = true;
  }

  addDocument() {
    this.showDocument = true;
  }

  updateTitleValue(value) {
    this.titleValue = value;
  }

  updateDescriptionValue(value) {
    this.descriptionValue = value;
  }

  updatePictureValue(value) {
    this.pictureValue = value
  }

  updateDocumentValue(value) {
    this.documentValue = value
  }

  updateDocumentTypeValue(value) {
    this.documentTypeValue = value
  }

  async getImagePath (value) {
    return new Promise(resolve => {

      if(value === null) {
        resolve(null);
      }
      const reader = new FileReader();
  
      reader.onload = () => {
        this.pictureUrl = reader.result
        resolve(this.pictureUrl);
      };
      reader.readAsDataURL(value);

    });
  }

  async getDocPath (value) {
    return new Promise(resolve => {

      if(value === null) {
        resolve(null);
      }
      const reader = new FileReader();
  
      reader.onload = () => {
        this.fileUrl = reader.result as string
        resolve(this.fileUrl);
      };
      reader.readAsDataURL(value);

    });
  
  }

  async getUrl() {
    await this.getImagePath(this.pictureValue).then(await this.getDocPath(this.documentValue).then());
  }

  async saveCustomNote () {
    let newData

    const [pictureUrl, fileUrl] = await Promise.all([
      this.getImagePath(this.pictureValue),
      this.getDocPath(this.documentValue),
    ]);

    const combinedData = {
      pictureUrl,
      fileUrl,
    };

      newData = {
        Id: dataCenter.customnote.length,
        imageUrl: combinedData.pictureUrl,
        filesUrl: combinedData.fileUrl
      }
      let customData = JSON.parse(localStorage.getItem('customSavedFiles'));
      customData.push(newData)
      localStorage.setItem("customSavedFiles", JSON.stringify(customData));
    

    let data = {};

    if(this.titleValue = null) {
      data['title'] = null;
    } else {
      data['title'] = this.titleValue
    }

    if(this.descriptionValue = null) {
      data['title'] = null;
    } else {
      data['title'] = this.descriptionValue
    }

    if(this.documentTypeValue = null) {
      data['title'] = null;
    } else {
      data['title'] = this.documentTypeValue
    }
    dataCenter.customnote.push(data);
    this.goToCustomNoteLanding();
  }
  goToCustomNoteLanding() {
    this.router.navigate(['customlanding'])
  }
}
