import React, { Component } from "react"
import { connect } from "react-redux"
import Header from "../Header/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import { darkTheme } from "../../Themes/darkTheme";
import { lightTheme } from "../../Themes/lightTheme";
import { State } from "../../Store/Reducers";
import Menu from "../Menu/Menu";
import { Switch, Route, withRouter } from "react-router-dom";
import { AuthRoute } from "../Utils/AuthRoute";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import CssBaseline from "@material-ui/core/CssBaseline";
import CreateBtn from "./components/CreateBtn";

const theme = {
  darkTheme,
  lightTheme
};

interface ApplicationProps {
  selectedTheme: "darkTheme" | "lightTheme";
  logged: boolean;
}

const mapStateToProps = (state: State) => {
  return {
    selectedTheme: state.view.selectedTheme,
    logged: state.authorization.authorized
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
        <Switch>
          {!logged && <Route path="/login" exact component={Login}></Route>}
          <AuthRoute path="/dashboard" authorized={logged} exact component={Dashboard}></AuthRoute>
          <AuthRoute path="/" authorized={logged} component={Dashboard}></AuthRoute>
          {/* TODO: Maybe add 404 page */}
        </Switch>
        <CreateBtn />
      </ThemeProvider>
    )
  }
}

export default withRouter(connect(mapStateToProps)(Application));