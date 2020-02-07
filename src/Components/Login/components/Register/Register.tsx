import React, { useState } from 'react';
import Modal from '../../../Utils/Modal/Modal';
import styles from './Register.styles';
import Button from '@material-ui/core/Button';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { enqueueNotification, closeNotification } from '../../../../Store/Actions/Notifications/notificationsAction';
import { NotificationFactory } from '../../../Utils/Notifier/NotificationFactory';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';
import { Dispatch } from 'redux';
import TextField from "@material-ui/core/TextField";
import { User } from "../../../../Api";

//TODO: break the textfields from here to components

interface RegisterProps {
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

const Register: React.FC<WithStyles<typeof styles> & RegisterProps> = (props) => {

  const {
    open,
    handleClose,//FIXME: if loading prevent from closing
    classes,
    createNotification
  } = props,
    [emailForm, setEmailForm] = useState({
      value: '',
      valid: true,
      errorMessage: ''
    }),
    [usernameForm, setUsernameForm] = useState({
      value: '',
      valid: true,
      errorMessage: ''
    }),
    [passwordForm, setPasswordForm] = useState({
      value: '',
      valid: true,
      errorMessage: ''
    }),
    [verifyPasswordForm, setVerifyPasswordForm] = useState({
      value: '',
      valid: true,
      errorMessage: ''
    }),
    [loading, setLoading] = useState(false);


  async function createUser() {

    if (isEmpty(verifyPasswordForm.value)) {

      setVerifyPasswordForm({
        ...verifyPasswordForm,
        valid: false
      });

      setTimeout(() => setVerifyPasswordForm({
        ...verifyPasswordForm,
        valid: true
      }), 2000);

    }

    if (isEmpty(passwordForm.value)) {

      setPasswordForm({
        ...passwordForm,
        valid: false
      });

      setTimeout(() => setPasswordForm({
        ...passwordForm,
        valid: true
      }), 2000);

    }

    if (isEmpty(usernameForm.value)) {

      setUsernameForm({
        ...usernameForm,
        valid: false
      });

      setTimeout(() => setUsernameForm({
        ...usernameForm,
        valid: true
      }), 2000);

    }

    if (isEmpty(emailForm.value)) {

      setEmailForm({
        ...emailForm,
        valid: false
      });

      setTimeout(() => setEmailForm({
        ...emailForm,
        valid: true
      }), 2000);
      return;

    }

    try {

      setLoading(true);

      await User.createUser({
        email: emailForm.value,
        username: usernameForm.value,
        password: passwordForm.value
      });

      createNotification('A verification email was send', 'success');

      handleClose();
      //TODO:add requests for username already exists
      //Check email is valid

    } catch ({ response }) {

      createNotification(response.data.message, 'error');
      setLoading(false);

    }

  }

  function submitWithEnter(e: any) {

    if (e.key === 'Enter') createUser();

  }

  function userNameChange(e: any) {

    setUsernameForm({
      ...usernameForm,
      value: e.target.value
    });

  }

  function passwordChange(e: any) {

    setPasswordForm({
      ...passwordForm,
      value: e.target.value
    });

  }

  function verifyPasswordChange(e: any) {

    setVerifyPasswordForm({
      ...verifyPasswordForm,
      value: e.target.value
    });

  }

  function emailChange(e: any) {

    setEmailForm({
      ...emailForm,
      value: e.target.value
    });

  }

  return (<Modal
    open={open}
    handleClose={handleClose}
    width={500}
    height={700}
    loading={loading}
  >
    <form autoComplete="off" className={classes.mainGrid}>
      <TextField
        required
        label="Username"
        id="username"
        variant="outlined"
        value={usernameForm.value}
        disabled={loading}
        onChange={userNameChange}
        error={!usernameForm.valid}
        helperText={usernameForm.errorMessage}
        onKeyDown={submitWithEnter}
      />
      <TextField
        required
        label="Email"
        id="email"
        variant="outlined"
        value={emailForm.value}
        disabled={loading}
        onChange={emailChange}
        error={!emailForm.valid}
        helperText={emailForm.errorMessage}
        onKeyDown={submitWithEnter}
      />
      <TextField
        required
        label="Password"
        id="password"
        variant="outlined"
        value={passwordForm.value}
        disabled={loading}
        onChange={passwordChange}
        error={!passwordForm.valid}
        helperText={passwordForm.errorMessage}
        onKeyDown={submitWithEnter}
      />
      <TextField
        required
        label="Verify Password"
        id="Vpassword"
        variant="outlined"
        value={verifyPasswordForm.value}
        disabled={loading}
        onChange={verifyPasswordChange}
        error={!verifyPasswordForm.valid}
        helperText={verifyPasswordForm.errorMessage}
        onKeyDown={submitWithEnter}
      />
      <Button
        className={classes.submitBtn}
        onClick={createUser}
        variant="contained"
      >
        Create User
      </Button>
    </form>
  </Modal>);

};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Register));