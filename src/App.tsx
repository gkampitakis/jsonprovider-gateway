import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme } from './themes/darkTheme';
import { lightTheme } from './themes/lightTheme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>

  );
}

export default App;
