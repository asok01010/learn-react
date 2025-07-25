import { useState } from "react";

const Create = () => {
    const [data, setData] = useState({
    title: '',
    description: '',
    author: localStorage.getItem('USER_EMAIL'),
     createdAt: new Date().toISOString() 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };



  return (
    <div className="create-form">
      <h3> Create Blog</h3>

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
