import React, { Component } from 'react';
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
import GoogleBtn from './components/socialButtons/GoogleBtn/GoogleBtn';
import GithubBtn from './components/socialButtons/GithubBtn/GithubBtn';
import FacebookBtn from './components/socialButtons/FacebookBtn/FacebookBtn';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import InputAdornment from "@material-ui/core/InputAdornment";
import autoBind from 'auto-bind';
import { loginRequest } from "../../Store/Actions/Authorization/authAction";
import isEmpty from 'lodash/isEmpty';

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

class Login extends Component<WithStyles<typeof styles> & LoginProps>{

  constructor(props: any) {
    super(props);

    autoBind(this);
  }

  state: LoginState = {//TODO: add it to react redux
    form: {
      email: {
        value: '',
        valid: true,
        errorMessage: ''
      },
      password: {
        value: '',
        valid: true,
        visible: false,
        errorMessage: ''
      }
    }
  };

  private login(e: any): void {

    const { form } = this.state;

    if (isEmpty(form.email.value)) {

      this.emailValidityState(false);

      setTimeout(() => this.emailValidityState(true), 2000);

    }

    if (isEmpty(form.password.value)) {

      this.passwordValidityState(false);

      setTimeout(() => this.passwordValidityState(true), 2000);

      return;
    }

    if (!validator.isEmail(form.email.value)) {

      this.emailValidityState(false, "Please provide correct email");

      setTimeout(() => this.emailValidityState(true), 2000);

      return;

    }

    this.props.loginAttempt(form.email.value, form.password.value);

  }

  private emailValidityState(status: boolean, message = "") {

    const { form } = this.state;

    form.email.valid = status;
    form.email.errorMessage = message;
    this.setState({ form: form });

  }

  private passwordValidityState(status: boolean) {

    const { form } = this.state;

    form.password.valid = status;
    this.setState({ form: form });

  }

  private emailOnChange(e: any): void {

    const { form } = this.state;

    form.email.value = e.target.value;
    this.setState({ form: form });

  }

  private passwordOnChange(e: any) {

    const { form } = this.state;

    form.password.value = e.target.value;
    this.setState({ form: form });

  }

  private toggleVisibility() {

    if (this.props.loading) return;

    const { form } = this.state;
    form.password.visible = !form.password.visible;
    this.setState({ form: form });

  }

  private renderVisibilityIcon(classes: any) {

    return this.state.form.password.visible ?
      <VisibilityIcon className={classes.visibilityIcon} onClick={this.toggleVisibility} />
      : <VisibilityOffIcon className={classes.visibilityIcon} onClick={this.toggleVisibility} />

  }

  private submitWithEnter(e: any) {

    if (e.key === 'Enter') this.login(e);

  }

  render() {
    const { classes, loading } = this.props;
    const { form } = this.state;

    return <Grid container className={classes.mainGrid}>
      <Grid item xs={4} style={{ marginBottom: '10%' }}>
        <Card className={classes.card} >
          <form style={{ padding: '0 5px' }}>
            <TextField
              className={classes.formField}
              required
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              onKeyDown={this.submitWithEnter}
              value={form.email.value}
              disabled={loading}
              onChange={this.emailOnChange}
              error={!form.email.valid}
              helperText={form.email.errorMessage}
            />
            <TextField
              className={classes.formField}
              required
              id="password"
              label="Password"
              type={form.password.visible ? 'text' : 'password'}
              autoComplete="current-password"
              variant="outlined"
              disabled={loading}
              value={form.password.value}
              onChange={this.passwordOnChange}
              onKeyDown={this.submitWithEnter}
              error={!form.password.valid}
              InputProps={{
                endAdornment:
                  <InputAdornment position="end">
                    {this.renderVisibilityIcon(classes)}
                  </InputAdornment>
              }}
            />
            <Button
              disabled={loading}
              className={classes.loginBtn}
              onClick={this.login}
              variant="contained">
              Login
            </Button>
          </form>
          <span className={classes.ORDivider}>OR</span>
          <Divider className={classes.divider} />
          <span>Login with:</span>
          <div className={classes.mediaBtns}>
            <GoogleBtn disabled={loading} />
            <FacebookBtn disabled={loading} />
            <GithubBtn disabled={loading} />
          </div>
          {loading && <LinearProgress className={classes.progressBar} color="secondary" />}
        </Card>
      </Grid>
    </Grid >
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));

interface LoginState {
  form: {
    email: {
      value: string;
      valid: boolean;
      errorMessage: string;
    },
    password: {
      value: string;
      visible: boolean;
      valid: boolean;
      errorMessage: string;
    }
  }
}

interface LoginProps {
  loading: boolean;
  loginAttempt: (email: string, password: string) => void;
}