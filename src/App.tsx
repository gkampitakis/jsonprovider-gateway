import React from 'react';
import './App.css';
import { store } from "./Store";
import { Provider } from "react-redux";
import Application from "./Components/Application/Application";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Application />
      </div>
    </Provider>
  );
}

export default App;
