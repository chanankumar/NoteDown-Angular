import { Component } from '@angular/core';
import { dataCenter } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-note-landing',
  templateUrl: './article-note-landing.component.html',
  styleUrl: './article-note-landing.component.css'
})
export class ArticleNoteLandingComponent {

  constructor (private router:Router) {}

  articleNoteData:any = []; 

  ngOnInit() {
    let data = dataCenter.article;
    data.forEach((element:any) => {
      this.articleNoteData.push(element);
    });
  }

  goToAddArticleNote() {
    this.router.navigate(['article']);
  }

  goToHomePage(){
    this.router.navigate(['home']);
  }
}
