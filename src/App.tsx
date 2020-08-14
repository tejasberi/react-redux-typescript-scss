import "./App.scss";

import { decrement, increment } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

function App() {
  const counter = useSelector((state: any) => state.reducer1);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <div className="app-counter">{counter}</div>
      <button
        onClick={() => {
          dispatch(increment({ payload: 1 }));
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement({ payload: 1 }));
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
