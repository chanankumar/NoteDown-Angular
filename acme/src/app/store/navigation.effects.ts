import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { navigateTo } from './navigation.actions';

@Injectable()
export class NavigationEffects {

  navigateTo$ = createEffect(() => this.actions$.pipe(
    ofType(navigateTo),
    tap(({ path }) => this.router.navigate(path))
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private router: Router
  ) {}
}
