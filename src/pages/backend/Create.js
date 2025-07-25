import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../../services/blog";

const Create = () => {
    const [data, setData] = useState({
    title: '',
    description: '',
    author: localStorage.getItem('USER_EMAIL'),
     createdAt: new Date().toISOString() 
  });


  const {id} = useParams();

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (id) {
      const blog = getBlogById(id);
      
        setData(
          {
            ...data,
            title: blog.title,
            description: blog.description,
          }
        );
      }
    }, []);
    

  return (
    <div className="create-form">
     
      
    {id && <h3>Edit Blog</h3>}
    {!id && <h3>Create Blog</h3>} 

      <form >
        <div className="input-field">
          <label className="label" htmlFor="title">
            Title
          </label>

          <input 
          type="title" 
          name="title" 
          placeholder="Enter your title" 
          value={data.title}
          onChange={handleChange}
          />
        </div>

        <div className="input-field">
          <label className="label" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="5"
            placeholder="Enter your description"
             value={data.description}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
      <div className="form-actions">
        <button type="submit" className="submit-btn"onClick={() => {
          console.log(data);
        }}>
          Save
        </button>
       
      </div>
    </div>
  );
};
export default Create;
