import { Component } from '@angular/core';
import { dataCenter } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-note',
  templateUrl: './text-note.component.html',
  styleUrl: './text-note.component.css'
})
export class TextNoteComponent {
  descriptionValue: string = '';
  constructor(private router: Router) {}
  
  saveTextNote() {
    dataCenter.textnotes.push({"description" : this.descriptionValue});
    this.router.navigate(['textlanding']);
  } 

  goToTextNoteLanding() {
    this.router.navigate(['textlanding']);
  }

  updateDescrtionValue(value:string) {
    this.descriptionValue = value;
  }

}
