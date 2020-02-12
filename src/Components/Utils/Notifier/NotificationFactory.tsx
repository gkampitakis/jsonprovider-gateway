import React, { Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

// Source of snackbar:https://iamhosseindhv.com/notistack/demos#maximum-snackbars

export class NotificationFactory {

  public static create(message: string, variant: 'success' | 'error' | 'warning' | 'info',
    handler?: (key: string) => void, secondaryText?: string, secondaryHandler?: (key: string) => void) {

    return NotificationFactory.payloadPrepare(variant, message, handler, secondaryText, secondaryHandler);

  }

  private static payloadPrepare(variant: string, message: string, handler?: (key: string) => void,
    secondaryText?: string, secondaryHandler?: (key: string) => void) {

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
            NotificationFactory.actionRenderer(handler, key, secondaryText, secondaryHandler)
          : null
      }
    };

  }

  private static actionRenderer(handler: (key: string) => void, key: string, secondaryText?: string, secondaryHandler?: (key: string) => void) {

    return (
      <Fragment>
        {secondaryHandler && <Button onClick={() => secondaryHandler(key)}>{secondaryText}</Button>}
        <IconButton onClick={() => handler(key)}>
          <CloseIcon />
        </IconButton>
      </Fragment>
    );
  }

}