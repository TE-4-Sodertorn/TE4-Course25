import { useEffect, useState } from "react";

const ComponentWithCleanup = () => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Tick");
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Cleanup called, timer cleared", timer);
    };
  }, [time]);

  return (
    <div>
      <h2>Component With Cleanup - useEffect</h2>
      Timer: {time}
    </div>
  );
};

export default ComponentWithCleanup;
