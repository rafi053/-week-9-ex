import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const isRunning = useRef<HTMLInputElement>(null);
  const interval = useRef(0);

  const handlerStart = () => {
    interval.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const handlerStop = () => {
    clearInterval(interval.current)
  };

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval.current);
  }, []);

  return (
    <div className="timer">
      <h1>{time}</h1>
      <button onClick={() => handlerStart()}>Start</button>
      <button onClick={() => handlerStop()}>Stop</button>
    </div>
  );
};

export default Timer;
