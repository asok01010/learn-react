
import { NavLink } from "react-router-dom";
const BlogRow = ( props ) => {
    return (
        <> 
            {props.blogData.map((item , index ) => {
                
             return (
   
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.created}</td>
              <td>
                <div className="action-buttons">
                <button className="action-btn1">Delete</button>
                <NavLink to={`/admin/blog/edit/${item.id}`}className="action-btn2">Edit</NavLink>
                <button className="action-btn3">View</button>
                </div>
              </td>
            </tr>
             )
 
            })}

        </>
   
  
    )

}
export default BlogRow;