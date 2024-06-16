import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  inputValue: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(): void {
    this.valueChange.emit(this.inputValue);
  }
}
