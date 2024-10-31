import React from "react";
import "./Counter.css";
interface CounterProps {
  value: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
}

const Counter: React.FC<CounterProps> = ({
  value,
  increaseCounter,
  decreaseCounter,
}) => {
  return (
    <div className="Counter">
      <h3>{value}</h3>
      <div className="counter-buttons">
        <button onClick={increaseCounter}>+</button>
        <button onClick={decreaseCounter}>-</button>
      </div>
    </div>
  );
};

export default Counter;
