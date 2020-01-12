import { createAction } from 'redux-actions';

export type ENQUEUE_NOTIFICATION = {
  notification: Notification;
};

export type CLOSE_NOTIFICATION = {
  key: string;
};

export type REMOVE_NOTIFICATION = {
  key: string;
};

export const ENQUEUE_NOTIFICATION = 'enqueueNotification',
  CLOSE_NOTIFICATION = 'closeNotification',
  REMOVE_NOTIFICATION = 'removeNotification';

export const enqueueNotification = createAction(ENQUEUE_NOTIFICATION, (notification: Partial<Notification>) => {

  const { key } = notification;

  return {
    notification: {
      ...notification,
      dismissed: false,
      key: key || (new Date().getTime() + Math.random()).toString()
    }
  };

});

export const closeNotification =
  createAction(CLOSE_NOTIFICATION, (key?: string) => ({ key }));

export const removeNotification =
  createAction(REMOVE_NOTIFICATION, (key?: string) => ({ key }));

export interface Notification {
  message: string;
  options: {};
  key: string;
  dismissed: boolean;
};