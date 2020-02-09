import React, { useState } from 'react';
import styles from './LoginForm.style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import isEmpty from 'lodash/isEmpty';
import isEmail from 'validator/lib/isEmail';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { WithStyles, withStyles } from '@material-ui/core/styles';

interface LoginFormProps {
  loading: boolean;
  formHandler: (email: string, password: string) => void;
}

const LoginForm: React.FC<WithStyles<typeof styles> & LoginFormProps> = (props) => {

  const { classes, loading, formHandler } = props,
    [emailForm, setEmailForm] = useState({
      value: '',
      valid: true,
      errorMessage: ''
    }),
    [passwordForm, setPasswordForm] = useState({
      value: '',
      valid: true,
      visible: false,
      errorMessage: ''
    });


  function updateValidityState(handler: (arg: any) => void, status: boolean, message = '') {

    handler((state: any) => ({
      ...state,
      valid: status,
      errorMessage: message
    }));

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

  function toggleVisibility() {

    if (props.loading) return;

    setPasswordForm((state) => ({
      ...state,
      visible: !passwordForm.visible
    }));

  }

  function submitWithEnter(e: any) {

    if (e.key === 'Enter') submitForm();

  }


  function submitForm() {

    if (isEmpty(emailForm.value)) {

      updateValidityState(setEmailForm, false);
      setTimeout(() => updateValidityState(setEmailForm, true), 2000);

    }

    if (isEmpty(passwordForm.value)) {

      updateValidityState(setPasswordForm, false);
      setTimeout(() => updateValidityState(setPasswordForm, true), 2000);

      return;

    }

    if (!isEmail(emailForm.value)) {

      updateValidityState(setEmailForm, false, "Please provide correct email");
      setTimeout(() => updateValidityState(setEmailForm, true), 2000);

      return;

    }

    formHandler(emailForm.value, passwordForm.value);

  }

  function renderVisibilityIcon(classes: any) {

    return passwordForm.visible ?
      <VisibilityIcon className={classes.visibilityIcon} onClick={toggleVisibility} />
      : <VisibilityOffIcon className={classes.visibilityIcon} onClick={toggleVisibility} />

  }

  return (<form style={{ padding: '0 5px' }}>
    <TextField
      className={classes.formField}
      required
      id="email"
      label="Email"
      variant="outlined"
      type="email"
      onKeyDown={submitWithEnter}
      value={emailForm.value}
      disabled={loading}
      onChange={inputChange(setEmailForm)}
      error={!emailForm.valid}
      helperText={emailForm.errorMessage}
    />
    <TextField
      className={classes.formField}
      required
      id="password"
      label="Password"
      type={passwordForm.visible ? 'text' : 'password'}
      autoComplete="current-password"
      variant="outlined"
      disabled={loading}
      value={passwordForm.value}
      onChange={inputChange(setPasswordForm)}
      onKeyDown={submitWithEnter}
      error={!passwordForm.valid}
      InputProps={{
        endAdornment:
          <InputAdornment position="end">
            {renderVisibilityIcon(classes)}
          </InputAdornment>
      }}
    />
    <Button
      disabled={loading}
      className={classes.loginBtn}
      onClick={submitForm}
      variant="contained">
      Login
    </Button>
  </form>);

};

export default withStyles(styles)(LoginForm);