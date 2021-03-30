import React from "react";
import { Provider } from "react-redux";
import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />      
        <Home />
      </Provider>      
    </>
  );
}

export default App;