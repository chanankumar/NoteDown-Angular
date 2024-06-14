import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextNoteLandingComponent } from './text-note-landing.component';

describe('TextNoteLandingComponent', () => {
  let component: TextNoteLandingComponent;
  let fixture: ComponentFixture<TextNoteLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextNoteLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextNoteLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
