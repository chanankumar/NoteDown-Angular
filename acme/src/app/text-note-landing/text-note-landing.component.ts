import { Component, Input, input } from '@angular/core';
import { dataCenter } from '../data';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { navigateTo } from '../store/navigation.actions';
import { getCommonObject } from '../store/selector';
import { Observable } from 'rxjs';
import { AppState } from '../store/state';

@Component({
  selector: 'app-text-note-landing',
  templateUrl: './text-note-landing.component.html',
  styleUrl: './text-note-landing.component.scss'
})
export class TextNoteLandingComponent {
  textNoteData:any = [];
  @Input() showActionButton:boolean = true;
  // commonObject$: Observable<[{ description:string }]>;
  constructor(private router: Router, private store: Store<{ navigation: { path: string[] } }>) {}
  
  ngOnInit() {
    this.store.select(getCommonObject).subscribe((data) => {
      data.forEach((element:any) => {
        this.textNoteData.push(element);
      });
    });

  }

  goToAddTextNote() {
    this.store.dispatch(navigateTo({ path: ['/text'] }));
  }

  goToHomePage(){
    this.store.dispatch(navigateTo({ path: ['/home'] }));

  }
}
