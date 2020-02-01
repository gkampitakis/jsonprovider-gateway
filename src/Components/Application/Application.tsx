import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme } from '../../Themes/darkTheme';
import { lightTheme } from '../../Themes/lightTheme';
import { State } from '../../Store/Reducers';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { AuthRoute } from '../Utils/AuthRoute';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import CssBaseline from '@material-ui/core/CssBaseline';
import CreateBtn from './components/CreateBtn';
import Notifier from '../Utils/Notifier/Notifier';
import { SnackbarProvider } from 'notistack';
import { iconVariant } from '../Utils/Notifier/Notification.styles';
import PageNotFound from '../PageNotFound/PageNotFound';
import { RouterState } from 'connected-react-router';
import SetPassword from '../Login/components/SetPassword/SetPassword';

const theme = {
  darkTheme,
  lightTheme
};

interface ApplicationProps {
  selectedTheme: 'darkTheme' | 'lightTheme';
  logged: boolean;
  router: RouterState;
}

const mapStateToProps = (state: State) => ({
  selectedTheme: state.view.selectedTheme,
  logged: state.authorization.authorized,
  router: state.router
});

const Application: React.FC<ApplicationProps> = (props) => {

  const { selectedTheme, logged, router } = props,
    pageNotFound = router.location.pathname === '/404';

  return (
    < ThemeProvider theme={theme[selectedTheme]} >
      <SnackbarProvider
        iconVariant={iconVariant}
        maxSnack={3}
        dense
      >
        <CssBaseline />
        <Notifier />
        <Header />
        <Switch>
          {!logged && <Route path="/login" exact component={Login} />}
          {!logged && <Route path="/password/new" exact component={SetPassword} />}
          <AuthRoute path="/dashboard" authorized={logged} exact component={Dashboard} />
          <AuthRoute path="/" exact authorized={logged} component={Dashboard} />
          <Route path="/404" exact component={PageNotFound} />
          <Redirect from="*" exact to="/404" />
        </Switch>
        {pageNotFound || <CreateBtn authorized={logged} />}
      </SnackbarProvider>
    </ThemeProvider >
  );

}

export default withRouter(connect(mapStateToProps)(Application));