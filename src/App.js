import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import { createStore } from "redux";
// import { DECREASE, INCREASE, RESET, CLEAR_CART, GET_TOTAL, GET_AMOUNT } from './actions.js'
import reducer from "./reducer.js"
import { Provider } from "react-redux"



const store777 = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

let currentState = store777.getState();
console.log("currentState", currentState);

function App() {
  return (
    <Provider store={store777}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
