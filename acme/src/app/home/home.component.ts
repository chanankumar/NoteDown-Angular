import { Component } from '@angular/core';
import { NavigationSkipped, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as NavigationActions from '../store/navigation.actions';
import { navigateTo } from '../store/navigation.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router, private store: Store<{ navigation: { path: string[] } }>) {}
  
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  navigateUsingNgrx() {
    this.store.dispatch(navigateTo({ path: ['/textlanding'] }));
  }
}
