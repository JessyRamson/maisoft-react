import React, { useState, useEffect } from "react";
import HookCounterFive from "./HookCounterFive";

const HookCount = () => {
  const [display, setdisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setdisplay(!display)}>Toggle button</button>
      {display && <HookCounterFive />}
    </div>
  );
};

export default HookCount;
