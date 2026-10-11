import { React, useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);
  const handleCountOne = () => {
    setcount(count + 1);
  };

  const handleCountTwo = () => {
    setcount(count - 1);
  };

  

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={handleCountOne}>Increment</button>
        <button onClick={handleCountTwo}>Decremets</button>
      </div>
    </div>
  );
};

export default App;
