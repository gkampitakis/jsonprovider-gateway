import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme } from '../../themes/darkTheme';
import { lightTheme } from '../../themes/lightTheme';
import { enableDarkMode, enableLightMode } from "../../store/Actions/Theme/themeAction";
import { State } from "../../store/Reducers";


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
        <button onClick={this.props.enableLightMode}>lightTheme</button>
        <button onClick={this.props.enableDarkMode}>darkTheme</button>
      </ThemeProvider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
