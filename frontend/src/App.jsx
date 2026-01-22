import { useEffect, useState } from "react";
import AddUser from "./components/Adduser";
import UserList from "./components/Userlist";
const API_URL = "http://localhost:3000/users";

function App() {
  const [users, setUsers] = useState([]);

  // Get users from backend
  const fetchUsers = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add user
  const addUser = async (user) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    fetchUsers();
  };

  // Delete user
  const deleteUser = async (index) => {
    await fetch(API_URL + "/" + index, {
      method: "DELETE",
    });
    fetchUsers();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React User Manager</h1>
      <AddUser onAdd={addUser} />
      <UserList users={users} onDelete={deleteUser} />
    </div>
  );
}

export default App;
