import { useState } from "react";

const MirrorInput = () => {
  const [text, setText] = useState<string>("");
  return (
    <div>
      You have typed: {text}
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default MirrorInput;
