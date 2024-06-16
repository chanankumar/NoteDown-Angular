// src/app/store/selectors.ts

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './state';

// Create a feature selector to select the 'commonObject' slice of state
export const selectCommonObject = createFeatureSelector<AppState>('textNoteData');

// Create a selector to get the 'commonObject' value
export const getCommonObject = createSelector(
  selectCommonObject,
  (state) => {return state.textNoteData}
); 
