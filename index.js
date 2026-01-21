let users = [1,2,3,4,5, "tarun"]; // In-memory user storage
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // json data read krne k liye middleware

// CREATE API POST request to add a new user  ( CREATE )
app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);

  res.json({
    message: "User added successfully",
    users: users
  });
});

// READ API GET request to fetch all users   ( READ )
app.get("/users", (req, res) => {
  res.json(users);
});

// UPDATE API PUT request to update a user by id  ( UPDATE )

app.put("/users/:index", (req, res) => {
  const index = req.params.index;
  users[index] = req.body;

  res.json({ message: "User updated", users });
});

// DELETE API DELETE request to delete a user by id  ( DELETE )

app.delete("/users/:index", (req, res) => {
  const index = req.params.index;
  users.splice(index, 1);

  res.json({ message: "User deleted", users });
});


 app.listen(3000, () => {
  console.log("Server running on port 3000");
});