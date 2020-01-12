import React, { ReactNode } from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';

//TODO: extend
//TODO: content implementation
// Source of snackbar:https://iamhosseindhv.com/notistack/demos#maximum-snackbars

export class NotificationFactory {

  public static info(message: string, handlder: ReactNode) {

  }


  public static error(message: string, handler?: (key: string) => void) {

    return NotificationFactory.payloadPrepare('error', message, handler);

  }

  private static payloadPrepare(variant: 'success' | 'error' | 'warning' | 'info', message: string, handler?: (key: string) => void) {

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