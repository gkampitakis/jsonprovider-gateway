import { createAction } from 'redux-actions';

export type LOADING = {
  status: boolean;
}

export const LOADING = 'loading';

export const loading = createAction(LOADING, (status: boolean) => {
  return { status };
});