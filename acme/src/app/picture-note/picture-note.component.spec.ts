import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureNoteComponent } from './picture-note.component';

describe('PictureNoteComponent', () => {
  let component: PictureNoteComponent;
  let fixture: ComponentFixture<PictureNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PictureNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
