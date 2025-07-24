import React from "react";
import { NavLink } from "react-router-dom";

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
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.created}</td>
              <td>
                <div className="action-buttons">
                  <button className="action-btn1">Delete</button>
                  <button className="action-btn2">Edit</button>
                  <button className="action-btn3">View</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Blog;
