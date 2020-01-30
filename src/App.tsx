import React from 'react';
import './App.css';
import { store, history } from "./Store";
import { Provider } from "react-redux";
import Application from "./Components/Application/Application";
import { ConnectedRouter } from "connected-react-router";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <ErrorBoundary>
            <Application />
          </ErrorBoundary>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
