import React from "react";

export default function Reviews({ reviewFormData, setReviewFormData }) {
  const removeItem = (indexNumber) => {
    const isConfirm = window.confirm(
      `Are You Sure To Delete ${indexNumber + 1} Review ?`
    );

    if (!isConfirm) {
      return;
    }

    const tempList = reviewFormData.filter((ls, i) => {
      if (i != indexNumber) {
        return ls;
      }
    });

    setReviewFormData(tempList);
  };
  return (
    <div className="card p-3 shadow mb-5">
      <h1 className="text-center mb-4"> Reviews</h1>
      <div className="table-responsive">
        <table class="table table-responsive">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Title</th>
              <th scope="col">Rating</th>
              <th scope="col">Description</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
            {reviewFormData.map((ls, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{ls.title}</td>
                  <td>{ls.rating}</td>
                  <td>{ls.description}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItem(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
