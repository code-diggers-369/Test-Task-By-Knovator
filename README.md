
# Test Task By Knovator

🤩 Features
There should be two sections

- Give Review
- Reviews
## ⭐ Give Review

#### - It shows a form for the user to give a review. 
#### - Form Includes two input ﬁelds,

```http
  - Title* ⇒ Title of the Review.
  - Rating* ⇒ Rating for the Review.
  - Description ⇒ Description of the Review.
```

#### - Form Includes two buttons,

```http
  - Submit ⇒ submit the review and clear the form.
  - Reset ⇒ reset the review and clear the form.
```

- Title* and Rating* are required ﬁelds.
- When a user submits the review, the review should be added to the Reviews section.


## ✨ Reviews

#### - Should show a list of reviews the user has added.
#### - List should show Title, Description & Rating that user has added.


## ✴ Plus Points

#### - You can add the Delete button on review.
#### - When a user clicks on the delete button review should be removed from list.
 


## Usage/Examples

```javascript
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

```


## Screenshots

#### Basic Ui
![App Screenshot](/images/1.png)
#### Fill Form Data
![App Screenshot](/images/2.png)
#### After Submit
![App Screenshot](/images/3.png)
#### Added More Reviews
![App Screenshot](/images/4.png)
#### List Out All Reviews
![App Screenshot](/images/5.png)
#### Delete Review
![App Screenshot](/images/6.png)
#### After Delete Review
![App Screenshot](/images/7.png)
#### Confirm Box With Delete Review
![App Screenshot](/images/8.png)
#### Only One Review Remaining
![App Screenshot](/images/9.png)
#### After Delete All Reviews
![App Screenshot](/images/10.png)


## Run Locally

Clone the project

```bash
  git clone https://github.com/code-diggers-369/Test-Task-By-Knovator.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## 🛠 Skills
Javascript, HTML, CSS, Bootstrap, React Js...


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://mrhp.gq/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hareshprajapati369/)
[![youtube](https://img.shields.io/badge/youtube-E05D44?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCcbZ7AmY35Kps985i5UIIKA)


# Thank You