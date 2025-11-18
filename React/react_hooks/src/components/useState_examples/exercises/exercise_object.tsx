import { useState } from "react";

type User = {
  name: string;
  age: number;
};

const ProfileCard = () => {
  const [user, setUser] = useState<User>({
    name: "Alice Rivers",
    age: 30,
  });
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>

      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>Increase age</button>
      <button onClick={() => setUser({ ...user, name: "Bob Rivers" })}>Change name</button>
    </div>
  );
};

export default ProfileCard;
