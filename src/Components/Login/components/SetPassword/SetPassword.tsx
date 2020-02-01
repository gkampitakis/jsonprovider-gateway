import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setHeaderTitle } from '../../../../Store/Actions/View/viewAction';
import { withRouter, RouteComponentProps, useHistory } from 'react-router-dom';
import { withStyles, WithStyles, TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { enqueueNotification, closeNotification } from "../../../../Store/Actions/Notifications/notificationsAction";
import { NotificationFactory } from '../../../Utils/Notifier/NotificationFactory'
import { Authorization } from '../../../../Api';
import styles from './SetPassword.styles';
import Button from '@material-ui/core/Button';

const mapDispatchToProps = (dispatch: Dispatch) => {

  return {
    setHeaderTitle: (title: string) => dispatch(setHeaderTitle(title)),
    createNotification: (message: string, type: 'success' | 'error' | 'warning' | 'info') => dispatch(
      enqueueNotification(NotificationFactory.create(message, type, (key: string) => dispatch(closeNotification(key)))))
  }

}

function parseUrl(url: string) {

  const params = url.substring(1).split('&'),
    queries: any = {};

  params.forEach(param => {

    const query = param.split('=');

    queries[query[0]] = query[1];

  });

  return queries;

}

interface SetPasswordProps {
  setHeaderTitle: (title: string) => void;
  createNotification: (message: string, type: 'success' | 'error' | 'warning' | 'info') => void;
}

const SetPassword: React.FC<SetPasswordProps & RouteComponentProps & WithStyles<typeof styles>> = (props) => {

  const [loading, setLoading] = useState(false),
    [password, setPassword] = useState(''),
    [verifyPassword, setVerifyPassword] = useState(''),
    history = useHistory(),
    queries = parseUrl(props.location.search),
    { classes, createNotification, setHeaderTitle } = props;

  useEffect(() => {

    setHeaderTitle('Set New Password');

    if (!queries.t) {

      createNotification('Provide a valid token', 'error');
      return;

    }

    return () => {

      setHeaderTitle('Login');

    }

  });

  function submitWithEnter(e: any) {

    if (e.key === 'Enter') submit(e);

  }

  function isButtonDisabled() {

    if (!password || !verifyPassword) return true;

    return password !== verifyPassword;

  }

  async function submit(e: any) {

    try {

      setLoading(true);
      await Authorization.resetPassword(password, queries.t);

      history.push('/Login');
      createNotification('Your password was changed', 'success');

    } catch (error) {

      setLoading(false);
      createNotification('An error occurred', 'error');

    }

  }

  return (<div className={classes.mainGrid}>
    <form autoComplete="off">
      <TextField
        className={classes.input}
        required
        label="New Password"
        id="password"
        type="password"
        onKeyDown={submitWithEnter}
        value={password}
        disabled={loading}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextField
        className={classes.input}
        required
        label="Verify Password"
        id="Vpassword"
        type="password"
        onKeyDown={submitWithEnter}
        value={verifyPassword}
        disabled={loading}
        onChange={(e) => setVerifyPassword(e.target.value)}
      />

      <Button
        variant="contained"
        style={{ margin: 'auto', width: '100%' }}
        onClick={submit}
        disabled={isButtonDisabled()}
      >
        {loading && <CircularProgress size={15} />}
        {!loading && 'Change Password'}
      </Button>
    </form>
  </div>);

};

export default connect(null, mapDispatchToProps)(withRouter(withStyles(styles)(SetPassword)));