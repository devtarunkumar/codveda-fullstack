function UserList({ users, onDelete }) {
  return (
    <div>
      <h3>All Users</h3>
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter(user => user && user.name)   // 💡 NULL SAFE FILTER
            .map((user, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
