import React, { useState } from "react";
import "./form.less";

function SampleForm() {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="field1">App Name</label>
        <input
          type="text"
          id="field1"
          name="appName"
          value={formData.field1}
          onChange={handleChange}
          className="form-control"
          aria-required="true"
        />
      </div>
      <div className="form-group">
        <label htmlFor="field2">Volume</label>
        <input
          type="text"
          id="field2"
          name="volume"
          value={formData.field2}
          onChange={handleChange}
          className="form-control"
          aria-required="true"
        />
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        aria-label="Submit form"
      >
        Submit
      </button>
    </form>
  );
}

export default SampleForm;
