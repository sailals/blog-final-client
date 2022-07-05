import axios from "axios";
import React, { useState } from "react";
import "./signin.css";

function Signin() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = data;
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signin", {
        username,
        email,
        password,
      });
      if (res.data) window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="hero">
        <div className="overlay">
          <h1 className=" text-center text-white">
            Welcome to Entertainment Blog
          </h1>
          <div className="container cont-2">
            <div className="form-container">
              <form action="" onSubmit={handleSubmit}>
                <h3 className="text-white mt-5">Register</h3>
                <input
                  autoComplete={false}
                  onChange={handleChange}
                  name="username"
                  value={data.username}
                  type="text"
                  className="w-100 mt-3 form-control "
                  placeholder="Enter User Name..."
                />
                <input
                  autoComplete={false}
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  type="text"
                  className="w-100 mt-3 form-control "
                  placeholder="Enter Your Email..."
                />
                <input
                  autoComplete={false}
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  type="password"
                  className="w-100 mt-3 form-control "
                  placeholder="Enter Your Password..."
                />
                <button className="btn btn-danger mt-3 w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
