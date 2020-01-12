import { handleActions, Action } from 'redux-actions';
import {
  ENQUEUE_NOTIFICATION,
  CLOSE_NOTIFICATION,
  REMOVE_NOTIFICATION,
  Notification
} from '../../Actions/Notifications/notificationsAction';

export interface NotificationsState {
  notifications: Notification[];
}

const defaultState: NotificationsState = {
  notifications: []
};

export const notificationReducer = handleActions({
  [CLOSE_NOTIFICATION]: closeNotificationReducer,
  [REMOVE_NOTIFICATION]: removeNotification,
  [ENQUEUE_NOTIFICATION]: enqueueNotificationReducer
} as any, defaultState);

function removeNotification(state: NotificationsState, action: Action<CLOSE_NOTIFICATION>) {

  const { key } = action.payload;

  const notifications = state.notifications.filter((notification: Notification) => (notification.key !== key));

  return {
    ...state,
    notifications: notifications
  };

}

function closeNotificationReducer(state: NotificationsState, action: Action<CLOSE_NOTIFICATION>) {

  const { key } = action.payload;

  const notifications = state.notifications.map((notification: Notification) => (
    notification.key === key ? { ...notification, dismissed: true } : notification));

  return {
    ...state,
    notifications: notifications
  };

}

function enqueueNotificationReducer(state: NotificationsState, action: Action<ENQUEUE_NOTIFICATION>) {

  return {
    ...state, notifications: [...state.notifications, action.payload.notification]
  };

}