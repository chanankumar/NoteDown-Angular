import { createReducer, on } from '@ngrx/store';
import * as NavigationActions from './navigation.actions';
import { AppState } from './state';

export interface NavigationState {
  textNoteData: any;
  path: string[];
}

export const initialState: NavigationState = {
  path: [],
  textNoteData: undefined
};

export const initialCommonData: AppState = {
  textNoteData: [{ description: 'description example' }],
};

const _navigationReducer = createReducer(
  initialState,
  on(NavigationActions.navigateTo, (state, { path }) => ({ ...state, path }))
);

export function navigationReducer(state, action) {
  return _navigationReducer(state, action);
}

const _commonReducer = createReducer(
  initialCommonData,
  on(NavigationActions.updateCommonData, (state, { newData } ) => ({
    ...state,
    textNoteData: [
      ...state.textNoteData,
      newData
    ]
  }))
);

export function commonReducer(state, action: any) {
  return _commonReducer(state, action);
}