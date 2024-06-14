import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DescriptionComponent } from './description/description.component';
import { PictureComponent } from './picture/picture.component';
import { DocumentComponent } from './document/document.component';
import { HomeComponent } from './home/home.component';
import { TextNoteComponent } from './text-note/text-note.component';
import { ArticleNoteComponent } from './article-note/article-note.component';
import { PictureNoteComponent } from './picture-note/picture-note.component';
import { DocumentNoteComponent } from './document-note/document-note.component';
import { NotesComponent } from './notes/notes.component';
import { TextNoteLandingComponent } from './text-note-landing/text-note-landing.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DescriptionComponent,
    PictureComponent,
    DocumentComponent,
    HomeComponent,
    TextNoteComponent,
    ArticleNoteComponent,
    PictureNoteComponent,
    DocumentNoteComponent,
    NotesComponent,
    TextNoteLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
