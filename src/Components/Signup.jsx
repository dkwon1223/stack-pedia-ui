import React, { useState } from "react";
import Nav from "./Nav";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <section>
      <Nav />
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Sign Up</button>
      </form>
    </section>
  );
};

export default Signup;
