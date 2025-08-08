
import { NavLink } from "react-router-dom";
import UserRow from "../../Components/backend/UserRow";
import { getAllUsers } from "../../services/user";
import React, { useEffect }from "react";


const User = () => {


  
 const [users, setUsers] = React.useState([]);

    useEffect(() => {
       getAllUsers().then((response) => {
        setUsers(response);
      });
               
      }, []);

      
  return (
    <div className="user-wrapper">
      <div className="user-header">
         <NavLink to="/admin/user/create" className="add-button">
            Add
          </NavLink>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        <UserRow userData={users} />
        </tbody>
      </table>
    </div>
  );
};

export default User;
