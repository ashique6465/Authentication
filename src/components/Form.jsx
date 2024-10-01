import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    const errors = { name: "", email: "" };
    if (name.trim() === "") {
      errors.name = "name is required";
      isValid = false;
    }

    const emailReg = /\S+@\S+\.\S+/;
    if (!emailReg.test(email)) {
      errors.email = "Entera valid Email";
      isValid = false;
    }
    setError(error);

    if (isValid) {
      console.log("Form sumbmitted", { name, email });
    }
  };
  return (
    <div className="bg-gray-200 w-full h-96">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          className="col"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
