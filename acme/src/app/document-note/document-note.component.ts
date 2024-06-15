import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { dataCenter } from '../data';

@Component({
  selector: 'app-document-note',
  templateUrl: './document-note.component.html',
  styleUrl: './document-note.component.css'
})
export class DocumentNoteComponent {
  documentValue: any;
  documentTypeValue: string = '';
  titleValue: string = '';
  pdfBase64String: string;

  constructor(private router: Router) {}
  
  saveDocumentNote() {
    dataCenter.documentnotes.push({"title" : this.titleValue});
    this.router.navigate(['documentlanding']);
  } 

  goToDocumentNoteLanding() {
    this.router.navigate(['documentlanding']);
  }

  updateTitleValue(value:string) {
    this.titleValue = value;
  }

  updateDocumentTypeValue(value:string) {
    this.documentTypeValue = value;
  }

  updateDocumentValue(value) {
    this.documentValue = value;
    this.saveDocument(this.documentValue);
  }

  saveDocument(element) {
    // localStorage.setItem('file', JSON.stringify(this.documentValue));
    if(localStorage.getItem('documentSaved') === null) {
      localStorage.setItem('documentSaved', JSON.stringify([]));
    }
    this.convertToBase64();
 }
 convertToBase64(): void {
  const reader = new FileReader();
  reader.onload = () => {
    this.pdfBase64String = reader.result as string;
    let newFilesData = {
      Id : dataCenter.documentnotes.length,
      filesUrl : this.pdfBase64String
    }
    let data = JSON.parse(localStorage.getItem("documentSaved"));
    data.push(newFilesData);
    localStorage.setItem("documentSaved", JSON.stringify(data));
  };
  reader.readAsDataURL(this.documentValue);
}
}
