import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withSnackbar, WithSnackbarProps } from 'notistack';
import { removeNotification, Notification } from '../../../Store/Actions/Notifications/notificationsAction';
import { State } from "../../../Store/Reducers";
import autoBind from 'auto-bind';

interface NotifierProps {
  notifications: Notification[];
  removeNotification: (key: string) => void;
}

class Notifier extends Component<WithSnackbarProps & NotifierProps> {

  private displayed: string[] = [];

  constructor(props: any) {

    super(props);
    autoBind(this);

  }

  private storeDisplayed(id: string) {

    this.displayed = [...this.displayed, id];

  };


  private removeDisplayed(id: string) {

    this.displayed = this.displayed.filter(key => id !== key)

  }

  componentDidUpdate() {

    const { notifications = [] } = this.props;

    notifications.forEach(({ key, message, options, dismissed }) => {

      if (dismissed) {

        this.props.closeSnackbar(key);
        return;

      }

      if (this.displayed.includes(key)) return;

      this.props.enqueueSnackbar(message, {
        key,
        ...options,
        onExited: () => {
          this.removeDisplayed(key);
          this.props.removeNotification(key);
        }
      });

      this.storeDisplayed(key);

    });

  }

  public render() {
    return null;
  }

}

const mapStateToProps = (state: State) => ({
  notifications: state.notifications.notifications
});

const mapDispatchToProps = (dispatch: any) => ({
  removeNotification: (key: string) => dispatch(removeNotification(key))
});

export default withSnackbar(connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifier));