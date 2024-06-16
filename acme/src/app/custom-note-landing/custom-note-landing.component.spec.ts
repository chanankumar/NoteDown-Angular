import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNoteLandingComponent } from './custom-note-landing.component';

describe('CustomNoteLandingComponent', () => {
  let component: CustomNoteLandingComponent;
  let fixture: ComponentFixture<CustomNoteLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomNoteLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomNoteLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
