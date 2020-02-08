import React, { useState } from 'react';
import Modal from '../../../Utils/Modal/Modal';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Authorization } from '../../../../Api';
import { enqueueNotification, closeNotification } from "../../../../Store/Actions/Notifications/notificationsAction";
import { NotificationFactory } from '../../../Utils/Notifier/NotificationFactory'
import ForgotPasswordForm from './components/ForgotPasswordForm';

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

const ForgotPassword: React.FC<ForgotPasswordProps> = (props) => {

  const {
    open,
    handleClose,
    createNotification
  } = props,
    [loading, setLoading] = useState(false);

  async function submit(email: string) {

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
      loading={loading}
    >
      <ForgotPasswordForm
        loading={loading}
        formHandler={submit}
      />
    </Modal>
  );

};

export default connect(null, mapDispatchToProps)(ForgotPassword);