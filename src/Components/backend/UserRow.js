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
                <button className="action-btn1"> <i className="ri-delete-bin-line"></i>Delete</button>
                <NavLink to={`/admin/user/edit/${user.id}`}className="action-btn2"> <i class="ri-pencil-line"></i> Edit</NavLink>
                <button className="action-btn3"> <i class="ri-eye-line"></i>View</button>
                </div>
              </td>
            </tr>
             )
 
            })}

        </>
   
  
    )

}

export default UserRow;