import { useState } from "react";

function AddUser({ onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submit = () => {
    if (!name || !age) return alert("Fill all fields");
    onAdd({ name, age });
    setName("");
    setAge("");
  };

  return (
    <div>
      <h3>Add User</h3>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={submit}>Add</button>
    </div>
  );
}

export default AddUser;
