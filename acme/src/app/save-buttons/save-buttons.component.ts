import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-buttons',
  templateUrl: './save-buttons.component.html',
  styleUrl: './save-buttons.component.scss'
})
export class SaveButtonsComponent {
  @Output() save : EventEmitter<any> = new EventEmitter;
  @Input() navigateTo:string;

  constructor (private router:Router) {}
  
  onSaveClick() {
    this.save.emit();
  }

  goToPage() {
    this.router.navigate([this.navigateTo])
  }
}
