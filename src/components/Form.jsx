import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      errors.email = "Enter a valid Email";
      isValid = false;
    }
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      isValid = false;
    }
    setError(errors);

    if (isValid) {
      console.log("Form submitted", { name, email, password });
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="bg-gray-300 h-screen">
      <div className=" w-full h-screen flex justify-center items-center">
        <form
          action=""
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-lg w-96 "
        >
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            className="mb-4 p-2 border border-gray-300 rounded w-full"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            className="mb-4 p-2 border border-gray-300 rounded w-full"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            className="mb-4 p-2 border border-gray-300 rounded w-full"
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
