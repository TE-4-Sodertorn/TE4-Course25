import { useState } from "react";

const MyCounter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>My awesome counter</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <span>{count}</span>
      <button
        onClick={() => {
          if (count === 0) return;
          setCount(count - 1);
        }}>
        Remove
      </button>
    </div>
  );
};

export default MyCounter;
