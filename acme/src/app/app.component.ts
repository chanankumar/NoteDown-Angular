import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'acme';

  constructor(private router: Router) {}
  
  goToHome() {
    this.router.navigate(['/home']);
  }
}
