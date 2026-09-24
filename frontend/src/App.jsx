import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [createName, setName] = useState("");
  const [createEmail, setEmail] = useState("");
  const [deleteId, setDeleteId] = useState(-1);
  const [updateId, setUpdateId] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");

  async function getUsers() {
    try {
      let data = await fetch("http://localhost:8080/users");
      data = await data.json();
      let newData = data.reverse();
      setUsers(newData);
    } catch (err) {
      console.log(err);
    }
  }

  async function postUser(name, email) {
    if (!name || !email) {
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      });

      const data = await response.json();

      console.log(data);

      getUsers();

      setName("");
      setEmail("");

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteUser(id) {
    try {
      await fetch(`http://localhost:8080/user/${id}`, {
        method: "DELETE",
      });

      getUsers();

      setDeleteId(-1);
    } catch (err) {
      console.log(err);
    }
  }

  async function updateUser(id, name, email) {
    try {
      let data = await fetch(`http://localhost:8080/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      });

      getUsers();

      setUpdateId("");
      setUpdateName("");
      setUpdateEmail("");

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="theScreen">
        <div className="allUsers">
          <h1 id="allUsersTitle">All Users</h1>
          <ol id="allUsersCard">
            {users.map((x) => (
              <li key={x.id} id="allUsersList">
                ID : {x.id} <br></br>NAME : {x.name} <br></br> EMAIL : {x.email}
              </li>
            ))}
          </ol>
        </div>

        <div className="allFunctions">
          <div className="createUser">
            <h1>Create New User</h1>
            <div id="createBox">
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={createName}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  name="email"
                  value={createEmail}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  postUser(createName, createEmail);
                }}
              >
                Add User
              </button>
            </div>
          </div>

          <div className="deleteuser">
            <h1>Delete User with Id</h1>

            <div id="deleteBox">
              <label htmlFor="deleteUser">Id :</label>
              <input
                type="text"
                name="deleteUser"
                value={deleteId}
                onChange={(e) => {
                  setDeleteId(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  deleteUser(Number(deleteId));
                }}
              >
                Delete User
              </button>
            </div>
          </div>

          <div className="updateUser">
            <h1>Update User with ID</h1>

            <div id="updateBox">

            <div>
              <label htmlFor="updateId">ID:</label>
              <input
                type="text"
                name="updateId"
                value={updateId}
                onChange={(e) => {
                  setUpdateId(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="updateName">Name:</label>
              <input
                type="text"
                name="updateName"
                value={updateName}
                onChange={(e) => {
                  setUpdateName(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor="updateEmail">Email:</label>
              <input
                type="text"
                name="updateEmail"
                value={updateEmail}
                onChange={(e) => {
                  setUpdateEmail(e.target.value);
                }}
              />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                updateUser(updateId, updateName, updateEmail);
              }}
            >
              Add User
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
