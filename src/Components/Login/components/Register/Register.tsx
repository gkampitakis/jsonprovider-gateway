import React, { useState } from 'react';
import Modal from '../../../Utils/Modal/Modal';
import { connect } from 'react-redux';
import { enqueueNotification, closeNotification } from '../../../../Store/Actions/Notifications/notificationsAction';
import { NotificationFactory } from '../../../Utils/Notifier/NotificationFactory';
import { Dispatch } from 'redux';
import { User } from "../../../../Api";
import RegisterForm from "./components/RegisterForm";

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

const Register: React.FC<RegisterProps> = (props) => {

  const {
    open,
    handleClose,
    createNotification
  } = props,
    [dirtyForm, setDirtyForm] = useState(undefined),//BUG: not yet implemented
    [loading, setLoading] = useState(false);


  async function createUser({ username, email, password }: { username: string, email: string, password: string }) {

    try {

      setLoading(true);

      await User.createUser({
        email,
        username,
        password
      });

      createNotification('A verification email was send', 'success');
      handleClose();

    } catch ({ response }) {

      createNotification(response.data.message, 'error');
      setLoading(false);

    }

  }

  return (<Modal
    open={open}
    handleClose={handleClose}
    width={500}
    height={700}
    loading={loading}
    title={"Register"}
  >
    <RegisterForm
      loading={loading}
      formHandler={createUser}
    />
  </Modal>);

};

export default connect(null, mapDispatchToProps)(Register);