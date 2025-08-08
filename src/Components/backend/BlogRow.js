
import { NavLink } from "react-router-dom";

const BlogRow = ( props ) => {
    return (
        <> 
            {props.blogData.map((item , index ) => {
                
             return (
   
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.description}</td>
              <td>
                <div className="action-buttons">
                
                <button className="action-btn1" onClick={() => props.handleDelete(item.id)} >  <i className="ri-delete-bin-line"></i>  Delete</button>
                <NavLink to={`/admin/blog/edit/${item.id}`}className="action-btn2"> <i class="ri-pencil-line"></i>Edit</NavLink>
                <button className="action-btn3"> <i class="ri-eye-line"></i> View</button>
                </div>
              </td>
            </tr>
             )
 
            })}

        </>
   
  
    )

}
export default BlogRow;