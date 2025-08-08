import axios from "axios";

export const getAllBlogs = async () => {
  return new Promise((resolve) => {
    axios.get('http://localhost:4000/blogs')
      .then(function(response) {
        resolve(response.data);
      })
  });

}



// export const getAllBlogs = async () => {
//    const response = await.get('http://localhost:4000/blogs');
//     return response.data;
// }

export const getBlogById = (id) => {
    const blogs = getAllBlogs();
    const blog = blogs.find((x) => x.id === parseInt(id));
    return blog ;
}