import React, { useEffect } from "react";
import { NavLink } from "react-router";
import BlogRow from "../../Components/backend/BlogRow";
import { getAllBlogs } from "../../services/blog";



const Blog = () => {

 const [blogs, setBlogs] = React.useState([]);

    useEffect(() => {
      getAllBlogs().then((response) => {
         setBlogs(response);
        });
         
      }, []);
      
  return (
    <div className="blog-wrapper">
      <div className="blog-header">
         <NavLink to="/admin/blog/create" className="add-button">
            Add
          </NavLink>
      </div>

      <table className="blog-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        <BlogRow blogData={blogs} />
        </tbody>
      </table>
    </div>
  );
};

export default Blog;
