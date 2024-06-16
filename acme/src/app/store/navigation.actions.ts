import { createAction, props } from '@ngrx/store';

export const navigateTo = createAction(
  '[Navigation] Navigate To',
  props<{ path: string[] }>()
);

export const updateCommonData = createAction(
  '[Common Data] Update',
  props<{ newData: {description:string} }>()
);