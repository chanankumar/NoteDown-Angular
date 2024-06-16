import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNoteComponent } from './custom-note.component';

describe('CustomNoteComponent', () => {
  let component: CustomNoteComponent;
  let fixture: ComponentFixture<CustomNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
