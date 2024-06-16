import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-action-button',
  templateUrl: './notes-action-button.component.html',
  styleUrl: './notes-action-button.component.scss'
})
export class NotesActionButtonComponent {

  @Input() navigateTo:string;

  constructor(private router:Router) {}

  goToPage() {
    this.router.navigate([this.navigateTo])
  }

  goToHomePage() {
    this.router.navigate(['home'])
  }
}
