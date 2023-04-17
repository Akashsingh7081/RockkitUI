import React, { useState } from "react";
import axios from "axios";

function Blog() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(`http://localhost:1337/api/forms`, {
        data: {
          firstName: firstName,
          lastName: lastName,
          mail: email,
          number: phone,
        },
      })
      .then((value) => {
        alert("Form Submitted");
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Firstname:
        <input type="text" value={firstName} onChange={handleFirstName} />
      </label>
      <br />
      <label>
        Lastname:
        <input type="text" value={lastName} onChange={handleLastName} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmail} />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" value={phone} onChange={handlePhone} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Blog;
