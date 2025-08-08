import { NavLink } from "react-router-dom";


const UserRow = ( props ) => {
    return (
        <> 
            {props.userData.map((user , index ) => {
                
             return (
   
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.created}</td>
              <td>
                <div className="action-buttons">
                <button className="action-btn1">Delete</button>
                <NavLink to={`/admin/user/edit/${user.id}`}className="action-btn2">Edit</NavLink>
                <button className="action-btn3">View</button>
                </div>
              </td>
            </tr>
             )
 
            })}

        </>
   
  
    )

}

export default UserRow;