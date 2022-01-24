import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const login = createAction(
  '[Login page] User Login',
  props<{ user: User }>()
);
