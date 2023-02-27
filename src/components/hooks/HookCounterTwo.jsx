import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, changeCount] = useState(initialCount);
  return (
    <div>
      <h3>Count {count}</h3>
      <button onClick={() => changeCount(initialCount)}>Reset</button>
      <button onClick={() => changeCount(count + 1)}>Increment</button>
      <button onClick={() => changeCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default HookCounterTwo;
