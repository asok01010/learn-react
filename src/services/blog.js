export const getAllBlogs = () => {
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
    return data;
}

export const getBlogById = (id) => {
    const blogs = getAllBlogs();
    const blog = blogs.find((x) => x.id === parseInt(id));
    return blog ;
}