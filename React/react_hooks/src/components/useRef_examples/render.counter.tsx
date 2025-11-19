import { useEffect, useRef, useState } from "react";

const RenderCounter = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = 15;
  }, []);

  return (
    <div>
      <h2>Render Counter</h2>
      <p>Count in state: {count}</p>
      <p>Count in REF: {renderCount.current}</p>
      <hr />
      <button onClick={() => setCount((prev) => prev + 1)}>Increment state count</button>
      <button onClick={() => renderCount.current++}>Increment REF count</button>

      <div className="">
        <h2>NOTE:</h2>
        Changing the count in state cause the component to re-render, while changing the ref count
        does not!
      </div>
    </div>
  );
};

export default RenderCounter;
