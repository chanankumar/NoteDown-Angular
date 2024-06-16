import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrl: './document.component.scss'
})
export class DocumentComponent {
  selectedDocumentType:string = '.pdf';
  @Output() documentTypeChange = new EventEmitter<string>();
  @Output() documentChange = new EventEmitter<string>();

  onDocumentTypeChange () {
    this.documentTypeChange.emit(this.selectedDocumentType);
  }

  onDocumentChange(event:any): void {
    this.documentChange.emit(event.target.files[0]);
  }

  getFileType() {
    return this.selectedDocumentType;
  }
}
