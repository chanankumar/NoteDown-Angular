import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { dataCenter } from '../data';

@Component({
  selector: 'app-article-note',
  templateUrl: './article-note.component.html',
  styleUrl: './article-note.component.scss'
})
export class ArticleNoteComponent {
  descriptionValue: string = '';
  titleValue: string = '';

  constructor(private router: Router) {}
  
  saveArticleNote() {
    dataCenter.article.push({"title" : this.titleValue, "description" : this.descriptionValue});
    this.router.navigate(['articlelanding']);
  } 

  updateDescriptionValue(value:string) {
    this.descriptionValue = value;
  }

  updateTitleValue(value:string) {
    this.titleValue = value;
  }
}
