import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNoteLandingComponent } from './article-note-landing.component';

describe('ArticleNoteLandingComponent', () => {
  let component: ArticleNoteLandingComponent;
  let fixture: ComponentFixture<ArticleNoteLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleNoteLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleNoteLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
