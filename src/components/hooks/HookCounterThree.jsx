import React, { useState } from "react";

const HookCounterThree = () => {
  const names = {
    firstname: "",
    lastname: "",
  };
  const [name, setName] = useState(names);

  return (
    <div>
      <input
        type="text"
        value={name.firstname}
        onChange={(e) => setName({ ...name, firstname: e.target.value })}
      />
      <input
        type="text"
        value={name.lastname}
        onChange={(e) => setName({ ...name, lastname: e.target.value })}
      />
      <h2>Your first name is - {name.firstname}</h2>
      <h2>Your last name is - {name.lastname}</h2>
      <h3>{JSON.stringify(name)}</h3>
    </div>
  );
};

export default HookCounterThree;
