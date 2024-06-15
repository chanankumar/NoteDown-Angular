import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureNoteLandingComponent } from './picture-note-landing.component';

describe('PictureNoteLandingComponent', () => {
  let component: PictureNoteLandingComponent;
  let fixture: ComponentFixture<PictureNoteLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PictureNoteLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureNoteLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
