import React, { useContext, useState } from "react";
import { useRef } from "react";
import "./login.css";
import { NavLink } from "react-router-dom";

import { Context } from "./../../context/Context";
import axios from "axios";

function Login() {
  const [display, setDisplay] = useState(false);
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching, user } = useContext(Context);

  const handleSubmit = async (e) => {
    console.log("s");
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login/", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res.data);
      if (res.data === "Wrong Credentials") {
        userRef.current.value = "";
        passwordRef.current.value = "";
        setDisplay(true);
      } else {
        setDisplay(false);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        if (res.data) window.location.replace("/");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(user);
  return (
    <>
      <div className="hero">
        <div className="overlay">
          <div className="container cont-2">
            <div className="form-container mt-5">
              <form onSubmit={handleSubmit}>
                <h3 className="text-white mt-5">Login</h3>
                <input
                  ref={userRef}
                  type="text"
                  className="w-100 mt-3 form-control "
                  placeholder="Enter User Name..."
                />

                <input
                  type="password"
                  ref={passwordRef}
                  className="w-100 mt-3 form-control "
                  placeholder="Enter Your Password..."
                />
                <button className="btn btn-primary mt-3 w-100">Login</button>
                {display && (
                  <div className="wrong mt-4 bg-danger p-2">
                    Invalid Username or Password
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
