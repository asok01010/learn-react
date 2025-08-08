import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../services/user";

const CreateUser = () => {

  const [name, setName] = useState("");

  useEffect(() => {
    getAllUsers().then((response) => {
      console.log("Users fetched:", response);
    });
  }, []);

  return (
    <div>
      <h1>Create User</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default CreateUser;