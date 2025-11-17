import { useState } from "react";

const Greeting = () => {
  const [name, setName] = useState<string>("Guest");
  return (
    <div>
      Hello, {name}
      <br />
      <button onClick={() => setName("Francisco")}>Change name</button>
    </div>
  );
};

export default Greeting;
