import React, { useState, useEffect } from "react";

const HookCounterFive = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    setX(e.clientX);

    setY(e.clientY);
  };

  useEffect(() => {
    console.log("use effect lodged");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("component unmounted");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      <h1>
        X - {x} , Y - {y}
      </h1>
    </div>
  );
};

export default HookCounterFive;
