import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById, createBlog, updateBlog } from "../../services/blog";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    description: "",
    author: localStorage.getItem("USER_EMAIL"),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    if (id) {
      getBlogById(id).then((response) => {
        setData({
          ...data,
          id: response.id,
          title: response.title,
          description: response.description,
        });
      });
    }
  }, []);

  const handleSubmit = () => {
    let hasError = false;
    let validationErrors = {
      title: "",
      content: "",
    };
    if (data.title.trim() === "") {
      validationErrors.title = "Title is required";
      hasError = true;
    }
    if (data.description.trim() === "") {
      validationErrors.description = "Content is required";
      hasError = true;
    }

    setErrors(validationErrors);
    if (!hasError) {
      // FORM IS VALID
      if (id) {
        // Update existing blog
        updateBlog(id, data)
          .then((response) => {
            toast.success("Blog has been updated ");
            navigate("/admin/blog");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // Create new blog
        createBlog(data)
          .then((response) => {
            toast.success("Blog has been created ");
            navigate("/admin/blog");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      console.log("has error");
    }
  };

  return (
    <div className="create-form">
      {id && <h3>Edit Blog</h3>}
      {!id && <h3>Create Blog</h3>}

      <form>
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
          {errors.title && <p className="error">{errors.title}</p>}
          <br />
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
          {errors.description && <p className="error">{errors.description}</p>}
          <br />
        </div>
      </form>
      <div className="form-actions">
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};
export default Create;
