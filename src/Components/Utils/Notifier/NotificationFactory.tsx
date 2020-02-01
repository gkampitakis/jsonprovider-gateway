import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

// Source of snackbar:https://iamhosseindhv.com/notistack/demos#maximum-snackbars

export class NotificationFactory {


  public static create(message: string, variant: 'success' | 'error' | 'warning' | 'info', handler?: (key: string) => void) {

    return NotificationFactory.payloadPrepare(variant, message, handler);

  }

  private static payloadPrepare(variant: string, message: string, handler?: (key: string) => void) {

    const key = (new Date().getTime() + Math.random()).toString();

    return {
      message: message,
      key: key,
      options: {
        variant: variant,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
        preventDuplicate: true,
        action: handler ?
          (key: string) =>
            (<IconButton onClick={() => handler(key)}>
              <CloseIcon />
            </IconButton>)
          : null
      }
    };

  }


}