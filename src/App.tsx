import React from 'react';
import './App.css';
import { store, history } from "./Store";
import { Provider } from "react-redux";
import Application from "./Components/Application/Application";
import { ConnectedRouter } from "connected-react-router";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
        <Application />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
