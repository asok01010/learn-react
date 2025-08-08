import axios from "axios";

export const getAllUsers = () => {
 
    return new Promise((resolve) => {
      axios.get("http://localhost:4000/users")
      .then(function (response) {
        resolve(response.data);
      });
    });
  };


export const getUserById = (id) => {
  const users = getAllUsers();
  const user = users.find((x) => x.id === parseInt(id));
  return user;
};
