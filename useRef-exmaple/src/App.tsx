import React, { useEffect, useRef, useState } from "react";

const App: React.FC = () => {
  const [first, setfirst] = useState<boolean>(true);
  const refNumber = useRef<number>(9);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAddToRef = (): void => {
    inputRef.current?.focus()
    refNumber.current++;
  };
  const handleRenderForced = (): void => {
    setfirst((prev) => !prev);
  };

  useEffect(() => {
    inputRef.current?.focus()
  },[]);
  
  return (
    <div>
      <h1>{refNumber.current}</h1>
      <input ref={inputRef} type="text" />
      <button onClick={handleAddToRef}>INC ref</button>
      <button onClick={handleRenderForced}>Render Force</button>
    </div>
  );
};

export default App;
