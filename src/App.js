import React, { useState } from "react";

// import components
import Form from "./components/Form";
import Reviews from "./components/Reviews";

export default function App() {
  const [reviewFormData, setReviewFormData] = useState([]);

  return (
    <div className="container">
      {/*  */}
      <Form setReviewFormData={setReviewFormData} />
      {/*  */}

      <Reviews
        reviewFormData={reviewFormData}
        setReviewFormData={setReviewFormData}
      />
    </div>
  );
}
