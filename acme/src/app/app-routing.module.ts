import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TextNoteComponent } from './text-note/text-note.component';
import { ArticleNoteComponent } from './article-note/article-note.component';
import { PictureComponent } from './picture/picture.component';
import { DocumentNoteComponent } from './document-note/document-note.component';
import { PictureNoteComponent } from './picture-note/picture-note.component';
import { NotesComponent } from './notes/notes.component';
import { TextNoteLandingComponent } from './text-note-landing/text-note-landing.component';
import { ArticleNoteLandingComponent } from './article-note-landing/article-note-landing.component';
import { PictureNoteLandingComponent } from './picture-note-landing/picture-note-landing.component';
import { DocumentNoteLandingComponent } from './document-note-landing/document-note-landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path : 'home', component : HomeComponent},
  { path : 'text', component : TextNoteComponent},
  { path : 'article', component : ArticleNoteComponent},
  { path : 'picture', component : PictureNoteComponent},
  { path : 'document', component : DocumentNoteComponent},
  { path : 'notes', component : NotesComponent},
  { path : 'textlanding', component : TextNoteLandingComponent},
  { path : 'articlelanding', component : ArticleNoteLandingComponent},
  { path : 'picturelanding', component : PictureNoteLandingComponent},
  { path : 'documentlanding', component : DocumentNoteLandingComponent},
]

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
