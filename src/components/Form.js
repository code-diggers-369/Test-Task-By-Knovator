import React, { useState } from "react";

export default function Form({ setReviewFormData }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title,
      rating,
      description,
    };

    setReviewFormData((temp) => {
      return [...temp, formData];
    });

    setTitle("");
    setRating("");
    setDescription("");
  };
  return (
    <div className="container my-5 card p-3 shadow">
      <h1 className="text-center">Give Reviews</h1>
      <form action="#" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title*
          </label>
          <input
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Rating*
          </label>
          <input
            className="form-control"
            id="exampleInputPassword1"
            required
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginRight: 20 }}
          >
            Submit
          </button>
          <button type="reset" className="btn btn-secondary">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
