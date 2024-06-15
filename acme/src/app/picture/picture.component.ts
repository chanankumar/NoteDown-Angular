import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css'
})
export class PictureComponent {
  @Output() valueChange = new EventEmitter<string>();

  onInput(event): void {
    this.valueChange.emit(event.target.files[0]);
  }
}
