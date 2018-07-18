import React, { Component } from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import RooterRouter from "./route";
class App extends Component {
  render() {
    return <div className="App">
        <Provider store={store}><RooterRouter /></Provider>
      </div>
  }
}

export default App;
