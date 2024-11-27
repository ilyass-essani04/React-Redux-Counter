import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./countSlice";

const Counter = () => {
  const nombre = useSelector((state) => state.counter.nombre); // Access counter state
  const dispatch = useDispatch(); // Initialize dispatch
  const [amount, setAmount] = useState(0); // State for custom increment amount

  return (
    <div>
      <h2>Count: {nombre}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <div style={{ marginTop: "10px" }}>
        <input
          type="number"
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Add a number
        </button>
      </div>
    </div>
  );
};

export default Counter;
