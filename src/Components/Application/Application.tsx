import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Header/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme } from '../../Themes/darkTheme';
import { lightTheme } from '../../Themes/lightTheme';
import { enableDarkMode, enableLightMode } from "../../Store/Actions/Theme/themeAction";
import { State } from "../../Store/Reducers";
import Menu from "../Menu/Menu";


const theme = {
  darkTheme,
  lightTheme
}

interface ApplicationProps {
  selectedTheme: 'darkTheme' | 'lightTheme';
  enableLightMode: () => void;
  enableDarkMode: () => void;
}

const mapStateToProps = (state: State) => {
  return { selectedTheme: state.theme.selectedTheme }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    enableLightMode: () => dispatch(enableLightMode()),
    enableDarkMode: () => dispatch(enableDarkMode())
  }
};

class Application extends Component<ApplicationProps> {

  public render() {
    return (
      <ThemeProvider theme={theme[this.props.selectedTheme]}>
        <Header />
        <Menu />
        <button onClick={this.props.enableLightMode}>lightTheme</button>
        <button onClick={this.props.enableDarkMode}>darkTheme</button>
      </ThemeProvider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);

//FIXME: the const render  = ()=> {} 