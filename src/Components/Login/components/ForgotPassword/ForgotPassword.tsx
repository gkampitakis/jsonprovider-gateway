import React, { useState } from 'react';
import Modal from '../../../Utils/Modal/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import styles from './ForgotPassword.styles';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Authorization } from '../../../../Api';
import { enqueueNotification, closeNotification } from "../../../../Store/Actions/Notifications/notificationsAction";
import { NotificationFactory } from '../../../Utils/Notifier/NotificationFactory'
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';

interface ForgotPasswordProps {
  open: boolean;
  handleClose: () => void;
  createNotification: (message: string, type: 'success' | 'error' | 'warning' | 'info') => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createNotification: (message: string, type: 'success' | 'error' | 'warning' | 'info') => dispatch(
      enqueueNotification(NotificationFactory.create(message, type, (key: string) => dispatch(closeNotification(key)))))
  };
}

const ForgotPassword: React.FC<WithStyles<typeof styles> & ForgotPasswordProps> = (props) => {

  const {
    open,
    handleClose,
    classes,
    createNotification
  } = props,
    [email, setEmail] = useState(''),
    [error, setError] = useState(''),
    [loading, setLoading] = useState(false);

  function submitWithEnter(e: any): void {

    if (e.key === 'Enter') submit(e);

  }

  async function submit(e: any) {

    if (isEmpty(email)) {

      setError('Please provide email');
      setTimeout(() => setError(''), 2000);
      return;

    }

    if (!validator.isEmail(email)) {

      setError('Invalid Email');
      setTimeout(() => setError(''), 2000);
      return;

    }

    setLoading(true);

    try {

      await Authorization.forgotPassRequest(email);

      createNotification('Recover mail was send', 'success');

      handleClose();

    } catch ({ response }) {

      createNotification(response.data.message, 'error');
      setLoading(false);

    }

  }

  return (
    <Modal
      title={"Request for password change"}
      open={open}
      handleClose={handleClose}
      width={500}
      height={350}
    >
      <form className={classes.submitForm} autoComplete="off">
        <TextField
          className={classes.input}
          required
          label="Email"
          id="email"
          variant="outlined"
          type="email"
          onKeyDown={submitWithEnter}
          value={email}
          disabled={loading}
          onChange={(e) => setEmail(e.target.value)}
          error={!!error}
          helperText={error}
        />
      </form>
      <Button
        variant="contained"
        style={{ margin: 'auto', width: '40%' }}
        onClick={submit}
      >
        Request
        </Button>
    </Modal>
  );

};

export default connect(null, mapDispatchToProps)(withStyles(styles)(ForgotPassword));