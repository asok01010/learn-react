import React from "react";
import { NavLink } from "react-router-dom";
import BlogRow from "../../Components/backend/BlogRow";


const Blog = () => {
  const data = [
    {
      id: 1,
      title: "blog 1",
      author: "admins",
      description: "blog 1 description",
      created: "2025-07-18",
    },
    {
      id: 2,
      title: "blog 2",
      author: "admins",
      description: "blog 2 description",
      created: "2025-07-13",
    },
  ];

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
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        <BlogRow blogData={data} />
        </tbody>
      </table>
    </div>
  );
};

export default Blog;
