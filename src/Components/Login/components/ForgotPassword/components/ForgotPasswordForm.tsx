import React, { useState, Fragment } from 'react';
import styles from './ForgotPasswordForm.styles';
import { withStyles, WithStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import LoadingButton from '../../../../Utils/LoadingButton/LoadingButton';
import isEmpty from 'lodash/isEmpty';
import isEmail from 'validator/lib/isEmail';

interface ForgotPasswordFormProps {
  loading: boolean;
  formHandler: (email: string) => void;
}

const ForgotPasswordForm: React.FC<WithStyles<typeof styles> & ForgotPasswordFormProps> = (props) => {

  const {
    classes,
    loading,
    formHandler
  } = props,
    [email, setEmail] = useState(''),
    [error, setError] = useState('');

  function submitForm() {

    if (isEmpty(email)) {

      setError((state: any) => 'Please provide email');
      setTimeout(() => setError((state: any) => ''), 2000);

      return;

    }

    if (!isEmail(email)) {

      setError((state: any) => 'Invalid Email');
      setTimeout(() => setError((state: any) => ''), 2000);

      return;

    }

    formHandler(email);

  }

  function submitWithEnter(e: any): void {

    if (e.key === 'Enter') submitForm();

  }

  return (
    <Fragment>
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
      <LoadingButton
        variant="contained"
        style={{ margin: 'auto', width: '40%' }}
        onClick={submitForm}
        loading={loading}
      >
        Request
      </LoadingButton>
    </Fragment>
  );

};

ForgotPasswordForm.defaultProps = {
  loading: false
};

export default withStyles(styles)(ForgotPasswordForm);