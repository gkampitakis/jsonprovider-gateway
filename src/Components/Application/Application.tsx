import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme } from '../../Themes/darkTheme';
import { lightTheme } from '../../Themes/lightTheme';
import { enableDarkMode, enableLightMode } from "../../Store/Actions/View/viewAction";
import { State } from "../../Store/Reducers";
import Menu from "../Menu/Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AuthRoute } from "../Utils/AuthRoute";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import { CssBaseline } from "@material-ui/core";
import { logout, loginAsync } from "../../Store/Actions/Authorization/authAction";

const theme = {
  darkTheme,
  lightTheme
};

interface ApplicationProps {
  selectedTheme: 'darkTheme' | 'lightTheme';
  logged: boolean;
  enableLightMode: () => void;
  enableDarkMode: () => void;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const mapStateToProps = (state: State) => {
  return {
    selectedTheme: state.view.selectedTheme,
    logged: state.authorization.authorized
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    enableLightMode: () => dispatch(enableLightMode()),
    enableDarkMode: () => dispatch(enableDarkMode()),
    login: (username: string, password: string) => dispatch(loginAsync(username, password)),
    logout: () => dispatch(logout())
  }
};

class Application extends Component<ApplicationProps> {

  public render() {
    const { selectedTheme, logged } = this.props;

    return (
      <ThemeProvider theme={theme[selectedTheme]}>
        <CssBaseline />
        <Header />
        <Menu />
        <Router>
          <Switch>
            <Route path="/login" exact component={Login}></Route>
            <AuthRoute path="/dashboard" authorized={logged} exact component={Dashboard}></AuthRoute>
            <AuthRoute path="/" exact authorized={logged} component={Dashboard}></AuthRoute>
          </Switch>
        </Router>
        {/* TODO: uncomment for functionality */}
        {/* <button onClick={this.props.enableLightMode}>lightTheme</button>
        <button onClick={this.props.enableDarkMode}>darkTheme</button>
        <button onClick={() => this.props.login('test', '12345')}>login</button>
        <button onClick={this.props.logout}>logout</button> */}
      </ThemeProvider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);