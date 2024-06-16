import { Component } from '@angular/core';
import { dataCenter } from '../data';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state';
import { updateCommonData } from '../store/navigation.actions';

@Component({
  selector: 'app-text-note',
  templateUrl: './text-note.component.html',
  styleUrl: './text-note.component.css'
})
export class TextNoteComponent {
  descriptionValue: string = '';
  textNoteData: {description: string}[];
  constructor(private router: Router,private store: Store<AppState>) {
    this.store.select(state => state.textNoteData).subscribe(obj => this.textNoteData = obj);
  }
  
  saveTextNote() {
    let textData = {description : this.descriptionValue};
    this.store.dispatch(updateCommonData({ newData : textData }));
    this.router.navigate(['textlanding']);
  } 

  goToTextNoteLanding() {
    this.router.navigate(['textlanding']);
  }

  updateDescrtionValue(value:string) {
    this.descriptionValue = value;
  }

}
