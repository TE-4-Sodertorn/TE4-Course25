import { useEffect, useState } from "react";

const EffectExampleNumberOne = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component re-rendered. Current count:", count);

    return () => {
      console.log("Cleanup for count:", count);
    };
  }, [count]);

  return (
    <div>
      <h2>Effect Example Number One - Count: {count} - useEffect</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Re-render me</button>
    </div>
  );
};

export default EffectExampleNumberOne;
