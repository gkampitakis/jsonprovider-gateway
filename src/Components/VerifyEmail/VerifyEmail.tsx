import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setHeaderTitle } from '../../Store/Actions/View/viewAction';
import { withRouter, RouteComponentProps, useHistory } from 'react-router-dom';
import { User } from '../../Api';
import { NotificationFactory } from "../Utils/Notifier/NotificationFactory";
import { enqueueNotification, closeNotification } from "../../Store/Actions/Notifications/notificationsAction";


interface VerifyEmailProps {
  setHeaderTitle: (title: string) => void;
  createNotification: (message: string, type: 'success' | 'error' | 'warning' | 'info') => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => {

  return {
    setHeaderTitle: (title: string) => dispatch(setHeaderTitle(title)),
    createNotification: (message: string, type: 'success' | 'error' | 'warning' | 'info') => dispatch(
      enqueueNotification(NotificationFactory.create(message, type, (key: string) => dispatch(closeNotification(key)))))
  }

}

function parseUrl(url: string) {//TODO: extract it from here

  const params = url.substring(1).split('&'),
    queries: any = {};

  params.forEach(param => {

    const query = param.split('=');

    queries[query[0]] = query[1];

  });

  return queries;

}

const VerifyEmail: React.FC<VerifyEmailProps & RouteComponentProps> = (props) => {

  const { createNotification, setHeaderTitle } = props,
    history = useHistory(),
    [loading, setLoading] = useState(true),
    { t: token } = parseUrl(props.location.search);

  useEffect(() => {

    setHeaderTitle('Verify Email');

    if (!token) {

      createNotification('Provide a valid token', 'error');

      setLoading(false);

      return;

    }

    async function verifyEmail(token: string) {

      try {

        await User.verifyEmail(token);

        history.push('/login');
        createNotification('Your email was verified', 'success');


      } catch ({ response }) {

        setLoading(false);
        createNotification(response.data.message, 'error');

      }

    }

    verifyEmail(token);

    return () => {

      setHeaderTitle('Login');

    };

  }, []);

  return (
    loading ?
      <div>Loading</div> :
      <div>Stopped Loading</div>
  );

}

export default connect(null, mapDispatchToProps)(withRouter(VerifyEmail));