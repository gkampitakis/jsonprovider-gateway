import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import isEmpty from 'lodash/isEmpty';
import isEmail from 'validator/lib/isEmail';
import styles from './RegisterForm.styles';
import LoadingButton from '../../../../Utils/LoadingButton/LoadingButton';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { User } from '../../../../../Api';
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

  function fieldError(handler: (arg: any) => void, message = '') {

    handler((state: any) => ({
      ...state,
      valid: false,
      errorMessage: message
    }));

    setTimeout(() =>
      handler((state: any) => ({
        ...state,
        valid: true,
        errorMessage: ''
      })), 2000)

  }

  function submitForm() {

    if (isEmpty(verifyPasswordForm.value)) {

      fieldError(setVerifyPasswordForm);

    }

    if (isEmpty(passwordForm.value)) {

      fieldError(setPasswordForm);

    }

    if (isEmpty(usernameForm.value)) {

      fieldError(setUsernameForm);

    }

    if (isEmpty(emailForm.value)) {

      fieldError(setEmailForm);

      return;

    }

    if (!isEmail(emailForm.value)) {

      fieldError(setEmailForm, "Please provide correct email");

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

  async function verifyEmail() {

    if (!emailForm.value) return;

    if (!isEmail(emailForm.value)) {

      fieldError(setEmailForm, "Please provide correct email");

      return;

    }

    try {

      const result = await User.userExist(emailForm.value, 'email')

      if (result.status === 200) {

        fieldError(setEmailForm, "Email already registered");

      }

    } catch (error) {

      console.error(error);

    }

  }

  async function verifyUsername() {

    if (!usernameForm.value) return;

    try {

      const result = await User.userExist(usernameForm.value, 'username')

      if (result.status === 200) {

        fieldError(setUsernameForm, "Username already used");

      }

    } catch (error) {

      console.error(error);

    }

  }

  function fieldsEmpty(...fields: string[]) {//TODO: not implemented

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
      onBlur={verifyUsername}
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
      onBlur={verifyEmail}
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
    <LoadingButton
      className={classes.submitBtn}
      onClick={submitForm}
      variant="contained"
      loading={loading}
    >
      Create User
    </LoadingButton>
  </form>);

}

export default withStyles(styles)(RegisterForm);