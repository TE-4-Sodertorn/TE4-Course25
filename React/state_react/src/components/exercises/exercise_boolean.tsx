import { useState } from "react";

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <div>
      Mode: {isDark ? "Dark" : "Light"} Mode
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
    </div>
  );
};

export default ToggleTheme;
