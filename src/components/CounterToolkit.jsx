import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, inc } from "../redux/counter/counterAction";

export const CounterToolkit = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="h-full w-full text-center">
      <h1>Counter : {value}</h1>
      <div className="grid">
        <button onClick={() => dispatch(inc())}>INCREMENT</button>
        <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      </div>
    </div>
  );
};
