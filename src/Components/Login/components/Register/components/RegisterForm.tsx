import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import isEmpty from 'lodash/isEmpty';
import isEmail from 'validator/lib/isEmail';
import styles from './RegisterForm.styles';
import Button from '@material-ui/core/Button';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
//TODO:add requests for username already exists
//TODO: prompt message if data are inserted before closing

interface RegisterFormProps {
  loading: boolean;
  formHandler: ({ username, email, password }: { username: string; email: string; password: string }) => void;
}

const RegisterForm: React.FC<WithStyles<typeof styles> & RegisterFormProps> = (props) => {

  const { classes, loading, formHandler } = props,
    [emailForm, setEmailForm] = useState({
      value: '',
      valid: true,
      errorMessage: '',
    }),
    [usernameForm, setUsernameForm] = useState({
      value: '',
      valid: true,
      errorMessage: '',
    }),
    [passwordForm, setPasswordForm] = useState({
      value: '',
      valid: true,
      errorMessage: '',
    }),
    [verifyPasswordForm, setVerifyPasswordForm] = useState({
      value: '',
      valid: true,
      errorMessage: '',
    });

  function updateValidityState(handler: (arg: any) => void, status: boolean, message = '') {

    handler((state: any) => ({
      ...state,
      valid: status,
      errorMessage: message
    }));

  }

  function submitForm() {

    if (isEmpty(verifyPasswordForm.value)) {

      updateValidityState(setVerifyPasswordForm, false);
      setTimeout(() => updateValidityState(setVerifyPasswordForm, true), 2000);

    }

    if (isEmpty(passwordForm.value)) {

      updateValidityState(setPasswordForm, false);
      setTimeout(() => updateValidityState(setPasswordForm, true), 2000);

    }

    if (isEmpty(usernameForm.value)) {

      updateValidityState(setUsernameForm, false);
      setTimeout(() => updateValidityState(setUsernameForm, true), 2000);

    }

    if (isEmpty(emailForm.value)) {

      updateValidityState(setEmailForm, false);
      setTimeout(() => updateValidityState(setEmailForm, true), 2000);

      return;

    }

    if (!isEmail(emailForm.value)) {

      updateValidityState(setEmailForm, false, "Please provide correct email");
      setTimeout(() => updateValidityState(setEmailForm, true), 2000);

      return;

    }

    formHandler({
      username: usernameForm.value,
      email: emailForm.value,
      password: passwordForm.value
    });

  }

  function submitWithEnter(e: any) {

    if (e.key === 'Enter') submitForm();

  }

  function inputChange(handler: (arg: any) => void) {

    return (e: any) => {

      e.persist();

      handler((state: any) => ({
        ...state,
        value: e.target.value
      }));

    }

  }

  function fieldsEmpty(...fields: string[]) {

    let allEmpty = true;

    for (let value of fields) {

      if (!isEmpty(value)) return false;

    }

    return allEmpty;

  }

  return (<form autoComplete="off" className={classes.mainGrid}>
    <TextField
      required
      label="Username"
      id="username"
      variant="outlined"
      value={usernameForm.value}
      disabled={loading}
      onChange={inputChange(setUsernameForm)}
      error={!usernameForm.valid}
      helperText={usernameForm.errorMessage}
      onKeyDown={submitWithEnter}
      className={classes.inputField}
    />
    <TextField
      required
      label="Email"
      id="email"
      variant="outlined"
      value={emailForm.value}
      disabled={loading}
      onChange={inputChange(setEmailForm)}
      error={!emailForm.valid}
      helperText={emailForm.errorMessage}
      onKeyDown={submitWithEnter}
      className={classes.inputField}
    />
    <TextField
      required
      label="Password"
      id="password"
      variant="outlined"
      value={passwordForm.value}
      disabled={loading}
      onChange={inputChange(setPasswordForm)}
      error={!passwordForm.valid}
      helperText={passwordForm.errorMessage}
      onKeyDown={submitWithEnter}
      className={classes.inputField}
    />
    <TextField
      required
      label="Verify Password"
      id="Vpassword"
      variant="outlined"
      value={verifyPasswordForm.value}
      disabled={loading}
      onChange={inputChange(setVerifyPasswordForm)}
      error={!verifyPasswordForm.valid}
      helperText={verifyPasswordForm.errorMessage}
      onKeyDown={submitWithEnter}
      className={classes.inputField}
    />
    <Button
      className={classes.submitBtn}
      onClick={submitForm}
      variant="contained"
      disabled={loading}
    >
      {loading ? <CircularProgress color="secondary" size={24} /> : ' Create User'}
    </Button>
  </form>);

}

export default withStyles(styles)(RegisterForm);