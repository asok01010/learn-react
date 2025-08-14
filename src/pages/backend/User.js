import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { deleteUser, getAllUsers } from "../../services/user";
import UserRow from "../../Components/backend/UserRow";
import {toast} from "react-toastify";

const User = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    getAllUsers().then((response) => {
      setUsers(response);
    });
  }, []);

  const handleDelete = (id) => {
    deleteUser(id)
      .then((response) => {
        toast.error("User has been deleted");
        getAllUsers().then((response) => {
          setUsers(response);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div>
        <div className="blog-header">
           
            <NavLink to="/admin/user/create" className="add-button">Add</NavLink>
        </div>
        <div className="user-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <UserRow userData={users} handleDelete={handleDelete}/>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;