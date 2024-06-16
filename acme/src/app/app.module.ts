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
import { ArticleNoteLandingComponent } from './article-note-landing/article-note-landing.component';
import { PictureNoteLandingComponent } from './picture-note-landing/picture-note-landing.component';
import { DocumentNoteLandingComponent } from './document-note-landing/document-note-landing.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NavigationEffects } from './store/navigation.effects';
import { commonReducer, navigationReducer } from './store/navigation.reducer';
import { CustomNoteLandingComponent } from './custom-note-landing/custom-note-landing.component';
import { CustomNoteComponent } from './custom-note/custom-note.component';

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
    TextNoteLandingComponent,
    ArticleNoteLandingComponent,
    PictureNoteLandingComponent,
    DocumentNoteLandingComponent,
    CustomNoteComponent,
    CustomNoteLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ navigation: navigationReducer , textNoteData: commonReducer }),
    EffectsModule.forRoot([NavigationEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
