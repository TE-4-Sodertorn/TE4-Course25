import React, { useState } from "react";

const LikeButtonComponent = () => {
  const [liked, setLiked] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLiked(e.target.checked);
  }

  return (
    <div>
      <h2>Example boolean - usetate / checkbox</h2>
      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={handleChange}
        />
        I like this!!!
      </label>

      <p>You {liked ? "liked this ❤️" : "did not like this 💔"}</p>
    </div>
  );
};

export default LikeButtonComponent;
