import axios from "axios";
import { useEffect, useState } from "react";
// import "./Register.css";
function Register() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(state);
  const [userinfo, setUserinfo] = useState([
    { _id: "", name: "", email: "", password: "" },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addUser = (e) => {
    e.preventDefault();

    const newUser = {
      name: state.name,
      email: state.email,
      password: state.password,
    };
    axios.post("http://localhost:5002/newUser", newUser);
    console.log("From insert", newUser);
  };

  const handleUpdate = (user) => {
    const updateData = {
      name: user.name,
      email: user.email,
      password: user.password,
    };
    setState(updateData);
  };

  const handleDelete = (id) => {
    console.log(id);
    axios.delete("http://localhost:5002/delete/" + id);
    alert("User Deleted");
  };

  useEffect(() => {
    axios.get("http://localhost:5002/user").then((res) => {
      const userData = res.data;
      setUserinfo(userData);
    });
  }, []);
  return (
    <div className="Register">
      <h2>My Register</h2>
      <div>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleInputChange}
          placeholder="name"
        />
      </div>{" "}
      <div>
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={handleInputChange}
          placeholder="email"
        />
      </div>{" "}
      <div>
        <input
          type="text"
          name="password"
          value={state.password}
          onChange={handleInputChange}
          placeholder="password"
        />
      </div>
      <div>
        <button onClick={addUser}>Add</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userinfo?.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <button onClick={() => handleUpdate(user)}>Edit</button>
                    <button onClick={() => handleDelete(user._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Register;
