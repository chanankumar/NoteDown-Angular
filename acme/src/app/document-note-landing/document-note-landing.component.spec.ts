import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentNoteLandingComponent } from './document-note-landing.component';

describe('DocumentNoteLandingComponent', () => {
  let component: DocumentNoteLandingComponent;
  let fixture: ComponentFixture<DocumentNoteLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentNoteLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentNoteLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
