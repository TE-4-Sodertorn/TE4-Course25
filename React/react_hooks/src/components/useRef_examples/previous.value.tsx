import { useRef, useState } from "react";

const PreviousValue = () => {
  const [text, setText] = useState<string>("");
  const prevText = useRef<string>("Frank");

  return (
    <div>
      <h2>Show previous text with REF</h2>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <p>Current: {text}</p>
      <p>OLD USERNAME: {prevText.current} </p>
    </div>
  );
};

export default PreviousValue;
