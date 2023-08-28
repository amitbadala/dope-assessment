import React, { useEffect, useState } from "react";
import "./form.less";
import Card from "../card/card";

const initialFormData = {
  appName: "",
  volume: "",
};

function SampleForm() {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    console.log(formData, "formData");
  }, [formData]);

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
    <Card>
      <h5 className="title">📌 Access Form</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="field1">App Name</label>
          <input
            type="text"
            name="appName"
            value={formData.appName}
            onChange={handleChange}
            className="form-control"
            aria-required="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="field2">Volume</label>
          <input
            type="number"
            name="volume"
            value={formData.volume}
            onChange={handleChange}
            className="form-control"
            aria-required="true"
          />
        </div>
        <div className="form-group actions">
          <button
            className="btn btn-primary"
            type="submit"
            aria-label="Submit form"
          >
            Submit
          </button>
          <button
            className="btn btn-ghost"
            type="button"
            aria-label="Submit form"
            onClick={() => setFormData(initialFormData)}
          >
            Clear
          </button>
        </div>
      </form>
    </Card>
  );
}

export default SampleForm;
