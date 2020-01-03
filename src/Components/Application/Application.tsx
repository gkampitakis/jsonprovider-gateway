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
  Route,
  Link
} from "react-router-dom";
import { AuthRoute } from "../Utils/AuthRoute";

const theme = {
  darkTheme,
  lightTheme
};

interface ApplicationProps {
  selectedTheme: 'darkTheme' | 'lightTheme';
  enableLightMode: () => void;
  enableDarkMode: () => void;
}

const mapStateToProps = (state: State) => {
  return { selectedTheme: state.view.selectedTheme }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    enableLightMode: () => dispatch(enableLightMode()),
    enableDarkMode: () => dispatch(enableDarkMode())
  }
};

const Dashboard: React.FC = () => {
  return <h1>DashBoardPage</h1>
};//TEMP

export const Login: React.FC = () => {
  return <h1>LoginPage</h1>
};//TEMP

class Application extends Component<ApplicationProps> {

  public render() {
    return (
      <ThemeProvider theme={theme[this.props.selectedTheme]}>
        <Header />
        <Menu />
        <Router>
          <Switch>
            <AuthRoute path="/dashboard" authorized={true} exact component={Dashboard}></AuthRoute>
            <Route path="/login" exact component={Login}></Route>
            <AuthRoute path="/" authorized={true} component={Dashboard}></AuthRoute>
          </Switch>
        </Router>
        <button onClick={this.props.enableLightMode}>lightTheme</button>
        <button onClick={this.props.enableDarkMode}>darkTheme</button>
      </ThemeProvider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);