import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesActionButtonComponent } from './notes-action-button.component';

describe('NotesActionButtonComponent', () => {
  let component: NotesActionButtonComponent;
  let fixture: ComponentFixture<NotesActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotesActionButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
