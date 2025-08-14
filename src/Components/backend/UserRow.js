import { NavLink } from "react-router";

const UserRow = (props) => {
  return (
    <>
      { props.userData && props.userData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <div className="action-buttons">
                
                <button className="action-btn1" onClick={() => props.handleDelete(item.id)} >  <i className="ri-delete-bin-line"></i>  Delete</button>
                <NavLink to={`/admin/user/edit/${item.id}`}className="action-btn2"> <i className="ri-pencil-line"></i>Edit</NavLink>
                <button className="action-btn3"> <i class="ri-eye-line"></i> View</button>
                </div>
              </td>
            </tr>
          )
      })}
    </>
  )
}

export default UserRow;