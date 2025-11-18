import { useEffect, useState } from "react";

const DataFetch = () => {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      const userNames = data.map((user: { name: string }) => user.name);
      setUsers(userNames);
    };
    fetchUsers();
  }, []); // 👈 only runs once

  return (
    <div className="">
      <h2>Data Fetch Example - useEffect</h2>
      <ul>
        {users.map((u) => (
          <li key={u}>{u}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetch;
