import { Component } from '@angular/core';
import { dataCenter } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-note-landing',
  templateUrl: './text-note-landing.component.html',
  styleUrl: './text-note-landing.component.css'
})
export class TextNoteLandingComponent {
  textNoteData:any = [];

  constructor(private router: Router) {}
  
  ngOnInit() {
    let data = dataCenter.textnotes;
    data.forEach((element:any) => {
      this.textNoteData.push(element);
    });
  }

  goToAddTextNote() {
    this.router.navigate(['text']);
  }

  goToHomePage(){
    this.router.navigate(['home']);

  }
}
