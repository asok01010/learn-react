const Create = () => {
  return (
    <div className="create-form">
      <h3> Create Blog</h3>

      <form>
        <div className="input-field">
          <label className="label" htmlFor="title">
            Title
          </label>

          <input type="title" id="title" placeholder="Enter your title" />
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
          ></textarea>
        </div>
      </form>
      <div className="form-actions">
        <button type="submit" className="submit-btn">
          Save
        </button>
       
      </div>
    </div>
  );
};
export default Create;
