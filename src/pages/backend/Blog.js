import React, { useEffect } from "react";
import { NavLink } from "react-router";
import BlogRow from "../../Components/backend/BlogRow";
import { deleteBlog, getAllBlogs } from "../../services/blog";
import { toast } from "react-toastify";


const Blog = () => {
  const [blogs, setBlogs] = React.useState([]);

  useEffect(() => {
    getAllBlogs().then((response) => {
      setBlogs(response);
    });
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id)
      .then((response) => {
        getAllBlogs().then((response) => {
          toast.error("Blog has been deleted");
          setBlogs(response);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
            {/* <th>Created At</th>
            <th>Updated At</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <BlogRow blogData={blogs}  handleDelete={handleDelete}/>
        </tbody>
      </table>
    </div>
  );
};

export default Blog;
