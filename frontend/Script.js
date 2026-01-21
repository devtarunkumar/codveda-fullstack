const API_URL = "http://localhost:3000/users";

// Load users when page loads
window.onload = function () {
  fetchUsers();
};

// Fetch all users
function fetchUsers() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("userTable");
      table.innerHTML = "";

      data.forEach((user, index) => {
        table.innerHTML += `
          <tr>
            <td>${index}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>
              <button onclick="deleteUser(${index})">Delete</button>
            </td>
          </tr>
        `;
      });
    });
}

// Add new user
function addUser() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, age })
  })
  .then(res => res.json())
  .then(() => {
    fetchUsers();
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
  });
}

// Delete user
function deleteUser(index) { // index ka use hume production level mai nhi karna chahiye iski apni ek uniq id hoti hai.
  fetch(API_URL + "/" + index, {
    method: "DELETE"
  })
  .then(res => res.json())
  .then(() => {
    fetchUsers();
  });
}
