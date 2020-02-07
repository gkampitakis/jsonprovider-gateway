import React, { useState } from 'react';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import styles from './Login.styles';
import { connect } from "react-redux";
import validator from 'validator';
import { State } from "../../Store/Reducers";
import Card from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import LinearProgress from '@material-ui/core/LinearProgress';
import GoogleBtn from './components/SocialButtons/GoogleBtn/GoogleBtn';
import GithubBtn from './components/SocialButtons/GithubBtn/GithubBtn';
import FacebookBtn from './components/SocialButtons/FacebookBtn/FacebookBtn';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InputAdornment from "@material-ui/core/InputAdornment";
import { loginRequest } from "../../Store/Actions/Authorization/authAction";
import isEmpty from 'lodash/isEmpty';
import Link from "../Utils/Link/Link";
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Register from './components/Register/Register';

const mapStateToProps = (state: State) => {
  return {
    loading: state.loading.status
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loginAttempt: (email: string, password: string) => dispatch(loginRequest(email, password))
  };
}

let timer: NodeJS.Timeout;

interface LoginProps {
  loading: boolean;
  loginAttempt: (email: string, password: string) => void;
}

//TODO: this might need refactor
//TODO: check what is updated with dev tools
//TODO: maybe it needs to be broken to more components
//TODO: break the form of email verification to a hook and reuse it here and to the request password page

const Login: React.FC<WithStyles<typeof styles> & LoginProps> = (props) => {

  const { classes, loading, loginAttempt } = props,
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
    }),
    [forgotPasswordModal, setForgotPasswordModal] = useState(false),
    [registerModal, setRegisterModal] = useState(false);

  function emailValidityState(status: boolean, message = '') {

    setEmailForm((state) => ({
      ...state,
      valid: status,
      errorMessage: message
    }));

  }

  function passwordValidityState(status: boolean) {

    setPasswordForm((state) => ({
      ...state,
      valid: status
    }));

  }

  function emailOnChange(e: any) {

    e.persist();

    setEmailForm((state) => ({
      ...state,
      value: e.target.value
    }));

  }

  function passwordOnChange(e: any) {

    e.persist();

    setPasswordForm((state) => ({
      ...state,
      value: e.target.value
    }));

  }

  function toggleVisibility() {

    if (props.loading) return;

    setPasswordForm((state) => ({
      ...state,
      visible: !passwordForm.visible
    }));

  }

  function renderVisibilityIcon(classes: any) {

    return passwordForm.visible ?
      <VisibilityIcon className={classes.visibilityIcon} onClick={toggleVisibility} />
      : <VisibilityOffIcon className={classes.visibilityIcon} onClick={toggleVisibility} />

  }

  function submitWithEnter(e: any) {

    if (e.key === 'Enter') login(e);

  }

  function login(e: any) {//TODO: refactor

    if (isEmpty(emailForm.value)) {

      emailValidityState(false);
      timer = setTimeout(() => emailValidityState(true), 2000)

    }

    if (isEmpty(passwordForm.value)) {

      passwordValidityState(false);

      setTimeout(() => passwordValidityState(true), 2000);

      return;

    }

    if (!validator.isEmail(emailForm.value)) {

      emailValidityState(false, "Please provide correct email");

      if (timer) clearTimeout(timer);
      timer = setTimeout(() => emailValidityState(true), 2000);

      return;

    }

    loginAttempt(emailForm.value, passwordForm.value);

  }

  return <Grid container className={classes.mainGrid}>
    <Grid item xs={"auto"} style={{ marginBottom: '10%' }}>
      <Card className={classes.card} >
        <form style={{ padding: '0 5px' }}>
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
            onChange={emailOnChange}
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
            onChange={passwordOnChange}
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
            onClick={login}
            variant="contained">
            Login
            </Button>
        </form>
        <Grid item className={classes.linkSession}>
          <Link disabled={loading} onClick={() => setRegisterModal(true)}>New here? Register</Link>
          <Link disabled={loading} onClick={() => setForgotPasswordModal(true)}>Forgot Password</Link>
        </Grid>
        <span className={classes.ORDivider}>OR</span>
        <Divider className={classes.divider} />
        <span>Login with:</span>
        <div className={classes.mediaBtns}>
          <GoogleBtn disabled={loading} />
          <FacebookBtn disabled={loading} />
          <GithubBtn disabled={loading} />
        </div>
        <LinearProgress style={loading ? {} : { visibility: "hidden" }} className={classes.progressBar} color="secondary" />
      </Card>
      <ForgotPassword
        open={forgotPasswordModal}
        handleClose={() => setForgotPasswordModal(false)}
      />
      <Register
        open={registerModal}
        handleClose={() => setRegisterModal(false)}
      />
    </Grid>
  </Grid >

};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));