import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inc, decrement} from "../redux/counter/counterAction";

export const CounterPages = () => {
  const count = useSelector((state) => state.value);
  const count5 = useSelector((state) => state.count5);

  const count100 = useSelector((state) => state.jay);

  const dispatch = useDispatch();
  return (
    <div className="text-black p-6 text-center">
      <h1>
        {count} : {count5} : {count100}
      </h1>
      <button className="bg-green-400" onClick={() => dispatch(inc())}>
        INCREMENT -
      </button>
      <button className="bg-green-400" onClick={() => dispatch(decrement())}>
        - DECREMENT
      </button>
      
    </div>
  );
};
